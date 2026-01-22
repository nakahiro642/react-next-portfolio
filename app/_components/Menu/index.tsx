"use client";

import Link from "next/link";
import Image from "next/image";
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
        <nav className={cx(styles.nav, isOpen && styles.open)}>
            <ul className={styles.items}>
                <li>
                    <Link href="/">ホーム</Link>
                </li>
                <li>
                    <Link href="/about">プロフィール</Link>
                </li>
                <li>
                    <Link href="/members">作品紹介</Link>
                </li>
                <li>
                    <Link href="/contact">お問い合わせ</Link>
                </li>
            </ul>
            <button className={cx(styles.button, styles.close)} onClick={close}>
                <Image
                    src="/close.svg"
                    alt="閉じる"
                    width={24}
                    height={24}
                    priority
                />
            </button>
        </nav>
        <button className={styles.button} onClick={open}>
            <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
        </button>
        </div>
    );
}