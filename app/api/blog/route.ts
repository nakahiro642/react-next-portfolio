import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MICROCMS_API_URL}/blog?orders=-date`,
      {
        headers: {
          'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from microCMS');
    }

    const data = await response.json();
    return NextResponse.json({ contents: data.contents });
  } catch (error) {
    console.error('Blog API Error:', error);
    return NextResponse.json({ contents: [] });
  }
}
