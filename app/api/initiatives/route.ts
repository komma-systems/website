import { NextResponse } from 'next/server'
import { fetchInitiatives } from '@/lib/notion'

export async function GET() {
  try {
    const initiatives = await fetchInitiatives()
    return NextResponse.json(initiatives)
  } catch (error) {
    console.error('Error fetching initiatives:', error)
    return NextResponse.json(
      { error: 'Failed to fetch initiatives' },
      { status: 500 }
    )
  }
}
