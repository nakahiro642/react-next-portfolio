'use client';

import Sheet from '@/app/_components/Sheet';
import Hero from '@/app/_components/Hero';
import ButtonLink from '@/app/_components/ButtonLink';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="My Portfolio"
        sub="中島央貴のポートフォリオサイトへようこそ"
      />

      <Sheet>
        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>詳しく知りたい方へ</h2>
          <p className={styles.ctaDescription}>
            プロフィールページでは、スキル、経歴、興味について詳しく紹介しています。ブログでは日々の学習内容や技術記事を発信しています。
          </p>
          <div className={styles.buttonGroup}>
            <ButtonLink href="/about">プロフィールへ</ButtonLink>
            <ButtonLink href="/blog">記録へ</ButtonLink>
            <ButtonLink href="/contact">お問い合わせ</ButtonLink>
          </div>
        </div>
      </Sheet>
    </>
  );
}
