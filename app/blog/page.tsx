'use client';

import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';
import styles from './page.module.css';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

// ブログ記事をここに直接書き込む
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '私が考えていること',
    content: '日々学校に通っていて感じることは、自分から行動を起こさないと成長できないということ。何事も積極性が大事だと思い知らされています。残り短い学生生活の中で、自分をレベルアップさせていきます。そして、将来のキャリアに向けて、今からできることに全力で取り組み、後悔のない選択をしていきたいです。',
    date: '2026-01-31',
  },
  {
    id: '2',
    title: 'CSS との向き合い方',
    content: 'CSS Modules を使い始めて 2 ヶ月。スタイルの競合がなくなるだけで、こんなにストレスが減るんだと驚きました。BEM や OOCSS などの命名規則も良いですが、CSS Modules はそもそもスコープが自動的に隔離されるので、気をつけることが少なくなります。これからのプロジェクトではずっと使うと思います。',
    date: '2026-01-31',
  },
  {
    id: '3',
    title: 'React Server Components について考える',
    content: 'React Server Components について学んでいます。サーバーサイドでコンポーネントをレンダリングし、クライアント側の JavaScript を減らせるというコンセプトは本当に面白い。パフォーマンスの向上だけでなく、セキュリティ面でも利点があるんだなと気づきました。今後のプロジェクトで試してみたいです。',
    date: '2026-01-31',
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Blog"
        sub="私が考えていること"
      />

      <Sheet>
        <div className={styles.container}>
          {blogPosts.length > 0 ? (
            <div className={styles.postsContainer}>
              {blogPosts.map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <time className={styles.postDate}>{post.date}</time>
                  <p className={styles.postContent}>{post.content}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.noPosts}>
              <p>記事はまだ公開されていません</p>
            </div>
          )}
        </div>
      </Sheet>
    </>
  );
}
