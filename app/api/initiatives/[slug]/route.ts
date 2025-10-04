import { NextRequest, NextResponse } from 'next/server'
import { fetchInitiativeBySlug } from '@/lib/notion'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const initiative = await fetchInitiativeBySlug(slug)
    
    if (!initiative) {
      return NextResponse.json(
        { error: 'Initiative not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(initiative)
  } catch (error) {
    console.error('Error fetching initiative:', error)
    return NextResponse.json(
      { error: 'Failed to fetch initiative' },
      { status: 500 }
    )
  }
}
