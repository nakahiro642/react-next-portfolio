import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_MICROCMS_API_URL}/blog?orders=-date`;
    const apiKey = process.env.MICROCMS_API_KEY;
    
    console.log('Blog API Request:');
    console.log('URL:', apiUrl);
    console.log('API Key exists:', !!apiKey);

    const response = await fetch(apiUrl, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey || '',
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error response:', errorText);
      throw new Error(`Failed to fetch from microCMS: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data);
    return NextResponse.json({ contents: data.contents });
  } catch (error) {
    console.error('Blog API Error:', error);
    return NextResponse.json({ contents: [] });
  }
}
