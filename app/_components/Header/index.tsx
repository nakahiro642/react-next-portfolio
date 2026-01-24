'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./index.module.css";
import Menu from "../Menu";

interface SiteIcon {
  id: string;
  name: string;
  icon: {
    url: string;
    height: number;
    width: number;
  };
}

export default function Header() {
  const [icon, setIcon] = useState<SiteIcon | null>(null);

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const response = await fetch('/api/site-icon');
        const { contents } = await response.json();
        if (contents && contents.length > 0) {
          setIcon(contents[0]);
        }
      } catch (error) {
        console.error('Failed to fetch site icon:', error);
      }
    };

    fetchIcon();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.iconWrapper}>
        <Link href="/" className={styles.iconLink}>
          {icon ? (
            <Image
              src={icon.icon.url}
              alt={`${icon.name} - ホームへ`}
              width={56}
              height={56}
              className={styles.icon}
              priority
            />
          ) : (
            <div className={styles.iconPlaceholder}>Logo</div>
          )}
        </Link>
      </div>
      <Menu />
    </header>
  );
}