// Temporarily disabled for deployment
// import { Client } from '@notionhq/client'

// Initialize Notion client
// const notion = new Client({ 
//   auth: process.env.NOTION_TOKEN 
// })

// Types for our initiative data
export interface Initiative {
  id: string
  title: string
  description: string
  phase: string
  tags: string[]
  status: 'Published' | 'Draft'
  slug: string
  createdAt: string
  updatedAt: string
}

// Function to fetch all initiatives from Notion
export async function fetchInitiatives(): Promise<Initiative[]> {
  try {
    // Temporarily return empty array for deployment
    return []
    
    // const response = await notion.databases.query({
    //   database_id: process.env.NOTION_DATABASE_ID!,
    //   filter: {
    //     property: 'Status',
    //     select: {
    //       equals: 'Published'
    //     }
    //   },
    //   sorts: [
    //     {
    //       property: 'Created',
    //       direction: 'descending'
    //     }
    //   ]
    // })

    return response.results.map((page: any) => {
      const properties = page.properties
      
      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.text?.content || 'Untitled Initiative',
        description: properties.Description?.rich_text?.[0]?.text?.content || '',
        phase: properties.Phase?.select?.name || 'Phase 1',
        tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        status: properties.Status?.select?.name || 'Draft',
        slug: properties.Slug?.rich_text?.[0]?.text?.content || 
              properties.Title?.title?.[0]?.text?.content?.toLowerCase().replace(/\s+/g, '-') || 'untitled',
        createdAt: page.created_time,
        updatedAt: page.last_edited_time
      }
    })
  } catch (error) {
    console.error('Error fetching initiatives from Notion:', error)
    return []
  }
}

// Function to fetch a single initiative by slug
export async function fetchInitiativeBySlug(slug: string): Promise<Initiative | null> {
  try {
    // Temporarily return null for deployment
    return null
    
    // const response = await notion.databases.query({
    //   database_id: process.env.NOTION_DATABASE_ID!,
    //   filter: {
    //     property: 'Slug',
    //     rich_text: {
    //       equals: slug
    //     }
    //   }
    // })

    if (response.results.length === 0) {
      return null
    }

    const page: any = response.results[0]
    const properties = page.properties
    
    return {
      id: page.id,
      title: properties.Title?.title?.[0]?.text?.content || 'Untitled Initiative',
      description: properties.Description?.rich_text?.[0]?.text?.content || '',
      phase: properties.Phase?.select?.name || 'Phase 1',
      tags: properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      status: properties.Status?.select?.name || 'Draft',
      slug: properties.Slug?.rich_text?.[0]?.text?.content || 
            properties.Title?.title?.[0]?.text?.content?.toLowerCase().replace(/\s+/g, '-') || 'untitled',
      createdAt: page.created_time,
      updatedAt: page.last_edited_time
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
