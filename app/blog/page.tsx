'use client';

import { useEffect, useState } from 'react';
import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';
import styles from './page.module.css';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const { contents } = await response.json();
        setPosts(contents || []);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Blog"
        sub="私が思っていること"
      />

      <Sheet>
        <div className={styles.container}>
          {isLoading ? (
            <div className={styles.noPosts}>読み込み中...</div>
          ) : posts.length > 0 ? (
            <div className={styles.postsContainer}>
              {posts.map((post) => (
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
