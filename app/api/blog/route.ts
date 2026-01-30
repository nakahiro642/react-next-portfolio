import { NextResponse } from 'next/server';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

// デフォルトの記事データ
const defaultBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '今日のコーディング思考',
    content: 'Next.js で新しいプロジェクトを始めました。TypeScript の型定義を厳密にすることで、開発の効率が格段に上がったように感じます。最初は面倒に思っていた型定義ですが、後々のバグ修正が本当に楽になるので、やっぱり大事だなって改めて思いました。',
    date: '2026-12-15',
  },
  {
    id: '2',
    title: 'CSS との向き合い方',
    content: 'CSS Modules を使い始めて 2 ヶ月。スタイルの競合がなくなるだけで、こんなにストレスが減るんだと驚きました。BEM や OOCSS などの命名規則も良いですが、CSS Modules はそもそもスコープが自動的に隔離されるので、気をつけることが少なくなります。これからのプロジェクトではずっと使うと思います。',
    date: '2024-12-10',
  },
  {
    id: '3',
    title: 'React Server Components について考える',
    content: 'React Server Components について学んでいます。サーバーサイドでコンポーネントをレンダリングし、クライアント側の JavaScript を減らせるというコンセプトは本当に面白い。パフォーマンスの向上だけでなく、セキュリティ面でも利点があるんだなと気づきました。今後のプロジェクトで試してみたいです。',
    date: '2024-12-05',
  },
];

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
    // エラー時はデフォルトデータを返す（オプション）
    return NextResponse.json({ contents: defaultBlogPosts });
  }
}
