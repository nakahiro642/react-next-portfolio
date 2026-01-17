'use client';

import { useActionState } from 'react';
import {
  Box,
  Typography,
  Card,
} from '@mui/material';
import { createContactData } from '@/app/_actions/contact';
import styles from './page.module.css';

export default function Contact() {
  const [state, formAction] = useActionState(createContactData, {
    status: '',
    message: '',
  });

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          py: 8,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '800px',
            px: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.0125rem',
              mb: 2,
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            お問い合わせ
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              mb: 4,
              fontSize: '0.95rem',
              textAlign: 'center',
            }}
          >
            ご不明な点やご相談がありましたら、お気軽にお問い合わせください。
          </Typography>

          <Card
            sx={{
              p: 4,
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'background.paper',
              borderRadius: 3,
            }}
          >
            {state.status === 'success' && (
              <div className={styles.alert} style={{ borderLeftColor: '#10b981' }}>
                <p>お問い合わせありがとうございます。ご連絡ありがとうございました。</p>
              </div>
            )}

            {state.status === 'error' && (
              <div className={styles.alert} style={{ borderLeftColor: '#ef4444' }}>
                <p>{state.message}</p>
              </div>
            )}

            <form action={formAction} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="lastname">姓 *</label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="山田"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="firstname">名 *</label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="太郎"
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="company">会社名 *</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="株式会社◇◇"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">メールアドレス *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">メッセージ *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="ご質問内容や相談内容をお書きください"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                送信する
              </button>
            </form>

            <p className={styles.privacyNote}>
              ※ お送りいただきました個人情報は、お問い合わせの回答に使用させていただきます。
            </p>
          </Card>
        </Box>
      </Box>
    </>
  );
}
