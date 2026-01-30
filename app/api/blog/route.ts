import { NextResponse } from 'next/server';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

export async function GET() {
  try {
    // microCMS から記事を取得
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
    // エラー時は空の配列を返す
    return NextResponse.json({ contents: [] });
  }
}
