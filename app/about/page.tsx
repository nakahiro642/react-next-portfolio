'use client';

import {
  Container,
  Box,
  Typography,
  Card,
  Grid,
  Chip,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '200px', sm: '250px', md: '300px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #06b6d4 100%)',
          color: 'white',
          mb: 4,
        }}
      >
        <Box sx={{ textAlign: 'center', zIndex: 1 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            About
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 1, opacity: 0.95 }}
          >
            my profile
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {/* Profile Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 32,
                bgcolor: 'primary.main',
                borderRadius: 1,
              }}
            />
            プロフィール
          </Typography>

          <Card
            sx={{
              p: 4,
              boxShadow: 2,
              backgroundColor: 'background.paper',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: '200px',
                    height: '200px',
                    bgcolor: '#e0e0e0',
                    borderRadius: '50%',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#999',
                    mb: 2,
                  }}
                >
                  📷
                </Box>
                <Typography variant="body2" color="textSecondary">
                  写真をここに置く予定
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  中島 央貴 / Nakashima Hiroki
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  フロントエンドエンジニア / Web開発者
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  京都テクノロジー&デザイン専門学校に在籍している1年生の学生です。
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label="React"
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label="Next.js"
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    label="TypeScript"
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 32,
                bgcolor: 'primary.main',
                borderRadius: 1,
              }}
            />
            経歴
          </Typography>

          <Timeline position="right">
            {/* Entry 1 */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: '#6366f1',
                    width: 48,
                    height: 48,
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                  }}
                >
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#e5e7eb' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: 3 }}>
                <Card sx={{ 
                  p: 3,
                  borderLeft: '4px solid #6366f1',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.15)',
                    transform: 'translateY(-2px)',
                  },
                }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    京都テクノロジー&デザイン専門学校 入学
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
                    2025年4月 ~ 現在
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    日々いろんな技術を学びながら、エンジニアとして成長中。
                  </Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        {/* Hobbies Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 32,
                bgcolor: 'primary.main',
                borderRadius: 1,
              }}
            />
            趣味
          </Typography>

          <Grid container spacing={4}>

            {/* Hobby 1 - ゲーム */}
            <Grid item xs={12} lg={6}>
              <Card sx={{ 
                height: '100%', 
                p: 4, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
                borderTop: '6px solid #ec4899',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                },
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(236, 72, 153, 0.25)',
                  transform: 'translateY(-6px)',
                },
              }}>
                <Box sx={{ fontSize: '4.5rem', mb: 2, position: 'relative', zIndex: 1 }}>🎮</Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ゲーム
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                  上達することが好きで、特にアクションゲームを好みます。
                </Typography>
              </Card>
            </Grid>

            {/* Hobby 2 - 睡眠 */}
            <Grid item xs={12} lg={6}>
              <Card sx={{ 
                height: '100%', 
                p: 4, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
                borderTop: '6px solid #06b6d4',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                },
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(6, 182, 212, 0.25)',
                  transform: 'translateY(-6px)',
                },
              }}>
                <Box sx={{ fontSize: '4.5rem', mb: 2, position: 'relative', zIndex: 1 }}>😴</Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  睡眠
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                  時間を気にせず寝るのが好きです。
                </Typography>
              </Card>
            </Grid>

            {/* Hobby 3 - 音楽制作 */}
            <Grid item xs={12} lg={6}>
              <Card sx={{ 
                height: '100%', 
                p: 4, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                borderTop: '6px solid #f59e0b',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                },
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(245, 158, 11, 0.25)',
                  transform: 'translateY(-6px)',
                },
              }}>
                <Box sx={{ fontSize: '4.5rem', mb: 2, position: 'relative', zIndex: 1 }}>🎵</Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  音楽
                </Typography>

                <Typography variant="body1" color="textSecondary" sx={{ lineHeight: 1.8 }}>
                  邦楽を中心にいろんな音楽を聴きます。
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Skills Section */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 32,
                bgcolor: 'primary.main',
                borderRadius: 1,
              }}
            />
            スキル
          </Typography>

          <Grid container spacing={3}>
            {/* Frontend */}
            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ 
                height: '100%', 
                p: 3,
                borderLeft: '4px solid #6366f1',
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <CodeIcon sx={{ fontSize: 32, color: '#6366f1' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6366f1' }}>
                    フロントエンド
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="HTML/CSS" size="small" />
                  <Chip label="JavaScript" size="small" />
                  <Chip label="TypeScript" size="small" color="primary" />
                  <Chip label="React" size="small" color="primary" />
                  <Chip label="Next.js" size="small" color="primary" />
                </Box>
              </Card>
            </Grid>

            {/* Styling */}
            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ 
                height: '100%', 
                p: 3,
                borderLeft: '4px solid #ec4899',
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <CodeIcon sx={{ fontSize: 32, color: '#ec4899' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ec4899' }}>
                    スタイリング
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="CSS Modules" size="small" />
                  <Chip label="Tailwind CSS" size="small" />
                  <Chip label="MUI" size="small" color="primary" />
                  <Chip label="Sass/SCSS" size="small" />
                </Box>
              </Card>
            </Grid>

            {/* Tools */}
            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ 
                height: '100%', 
                p: 3,
                borderLeft: '4px solid #06b6d4',
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <CodeIcon sx={{ fontSize: 32, color: '#06b6d4' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#06b6d4' }}>
                    ツール・環境
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="Git" size="small" />
                  <Chip label="GitHub" size="small" />
                  <Chip label="VS Code" size="small" />
                  <Chip label="npm" size="small" />
                  <Chip label="Vercel" size="small" />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
