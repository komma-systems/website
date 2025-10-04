import { Client } from '@notionhq/client'

// Initialize Notion client
const notion = new Client({ 
  auth: process.env.NOTION_TOKEN 
})

// Debug: Check what methods are available
console.log('Notion client methods:', Object.getOwnPropertyNames(notion))
if (notion.databases) {
  console.log('Database methods:', Object.getOwnPropertyNames(notion.databases))
}

// Debug: Check if client is properly initialized
if (!process.env.NOTION_TOKEN) {
  console.error('NOTION_TOKEN is not set')
}
if (!process.env.NOTION_DATABASE_ID) {
  console.error('NOTION_DATABASE_ID is not set')
}

// Types for our initiative data
export interface Initiative {
  id: string
  title: string
  slug: string
  stage: string
  tags: string[]
  prod: boolean
  createdAt: string
  updatedAt: string
}

// Function to fetch all initiatives from Notion
export async function fetchInitiatives(): Promise<Initiative[]> {
  try {
    console.log('Attempting to fetch initiatives from Notion...')
    
    // Use search method to find all pages, then filter by database
    const searchResponse = await notion.search({
      query: '',
      filter: {
        value: 'page',
        property: 'object'
      }
    })
    
    console.log('Search found', searchResponse.results.length, 'total pages')
    
    // Filter pages that belong to our database
    const dbPages = searchResponse.results.filter((page: any) => {
      return page.parent?.database_id === process.env.NOTION_DATABASE_ID
    })

    // Filter only pages where "Prod?" is checked
    const prodPages = dbPages.filter((page: any) => {
      return page.properties?.['Prod?']?.checkbox === true
    })
    
    console.log('Found', dbPages.length, 'pages in our database')
    console.log('Found', prodPages.length, 'published pages')

    const response = { results: prodPages }

    return response.results.map((page: any) => {
      const properties = page.properties
      
      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.text?.content || 'Untitled Initiative',
        slug: properties.Slug?.rich_text?.[0]?.text?.content || 
              properties.Title?.title?.[0]?.text?.content?.toLowerCase().replace(/\s+/g, '-') || 'untitled',
        stage: properties.Stage?.select?.name || 'Stage 1',
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        prod: properties['Prod?']?.checkbox || false,
        createdAt: page.created_time,
        updatedAt: page.last_edited_time
      }
    })
  } catch (error) {
    console.error('Error fetching initiatives from Notion:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      notionClient: !!notion,
      clientMethods: notion ? Object.getOwnPropertyNames(notion) : 'No client'
    })
    return []
  }
}

// Function to fetch a single initiative by slug
export async function fetchInitiativeBySlug(slug: string): Promise<Initiative | null> {
  try {
    console.log('Fetching initiative by slug:', slug)

    // Use search method to find the page by slug
    const searchResponse = await notion.search({
      query: '',
      filter: {
        value: 'page',
        property: 'object'
      }
    })

    // Filter pages that belong to our database and have the matching slug
    const matchingPage = searchResponse.results.find((page: any) => {
      const pageSlug = page.properties?.Slug?.rich_text?.[0]?.text?.content ||
                      page.properties?.Title?.title?.[0]?.text?.content?.toLowerCase().replace(/\s+/g, '-')
      return page.parent?.database_id === process.env.NOTION_DATABASE_ID &&
             pageSlug === slug &&
             page.properties?.['Prod?']?.checkbox === true
    })

    if (!matchingPage) {
      console.log('No published initiative found with slug:', slug)
      return null
    }

    const properties = matchingPage.properties

    return {
      id: matchingPage.id,
      title: properties.Title?.title?.[0]?.text?.content || 'Untitled Initiative',
      slug: properties.Slug?.rich_text?.[0]?.text?.content ||
            properties.Title?.title?.[0]?.text?.content?.toLowerCase().replace(/\s+/g, '-') || 'untitled',
      stage: properties.Stage?.select?.name || 'Stage 1',
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      prod: properties['Prod?']?.checkbox || false,
      createdAt: matchingPage.created_time,
      updatedAt: matchingPage.last_edited_time
    }
  } catch (error) {
    console.error('Error fetching initiative by slug:', error)
    return null
  }
}

// Function to get all initiative slugs for static generation
export async function getAllInitiativeSlugs(): Promise<string[]> {
  const initiatives = await fetchInitiatives()
  return initiatives.map(initiative => initiative.slug)
}
