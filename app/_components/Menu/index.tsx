"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div>
        {isOpen && (
            <div className={styles.overlay} onClick={close} />
        )}
        <nav className={cx(styles.nav, isOpen && styles.open)}>
            <ul className={styles.items}>
                <li>
                    <Link href="/" onClick={close}>ホーム</Link>
                </li>
                <li>
                    <Link href="/about" onClick={close}>プロフィール</Link>
                </li>
                <li>
                    <Link href="/portfolio" onClick={close}>作品紹介</Link>
                </li>
                <li>
                    <Link href="/blog" onClick={close}>記録</Link>
                </li>
                <li>
                    <Link href="/contact" onClick={close}>お問い合わせ</Link>
                </li>
            </ul>
        </nav>
        <button className={cx(styles.menuButton, isOpen && styles.active)} onClick={isOpen ? close : open} aria-label="メニュー">
            <span className={styles.hamburger}></span>
        </button>
        </div>
    );
}