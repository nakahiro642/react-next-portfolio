'use client';

import {
  Container,
  Box,
  Typography,
  Card,
  Chip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import PaletteIcon from '@mui/icons-material/Palette';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Members() {
  const portfolioItems = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      description: 'Next.js、React、TypeScriptを使用して作成した自己紹介サイト。',
      technologies: ['Next.js', 'React', 'TypeScript', 'MUI'],
      link: '#',
    },
    {
      id: 2,
      title: 'Todoアプリケーション',
      description: '乞うご期待',
      technologies: [],
      link: '#',
    },
    {
      id: 3,
      title: '天気予報アプリ',
      description: '乞うご期待',
      technologies: [],
      link: '#',
    },
  ];

  const frontendSkills = [
    { name: 'React', icon: <CodeIcon /> },
    { name: 'Next.js', icon: <CodeIcon /> },
    { name: 'TypeScript', icon: <CodeIcon /> },
    { name: 'JavaScript', icon: <CodeIcon /> },
    { name: 'HTML/CSS', icon: <CodeIcon /> },
  ];

  const designSkills = [
    { name: 'CSS Modules', icon: <PaletteIcon /> },
    { name: 'MUI', icon: <DesignServicesIcon /> },
    { name: 'Tailwind CSS', icon: <PaletteIcon /> },
  ];

  const toolSkills = [
    { name: 'Git/GitHub', icon: <GitHubIcon /> },
    { name: 'VS Code', icon: <BuildIcon /> },
    { name: 'npm', icon: <TerminalIcon /> },
    { name: 'Vercel', icon: <StorageIcon /> },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ pb: 8, pt: 4 }}>
        {/* Introduction Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.0125rem',
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
            作品紹介
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              mb: 4,
              fontSize: '1rem',
            }}
          >
            Web開発の学習を通じて制作した作品をご紹介します。
          </Typography>
        </Box>

        {/* Portfolio Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
            mb: 8,
          }}
        >
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                p: 3,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                },
                cursor: 'pointer',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 1,
                  color: 'primary.main',
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  mb: 2,
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}
              >
                {item.description}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {item.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Card>
          ))}
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.0125rem',
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
            制作
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {/* Frontend Skills */}
            <Card
              sx={{
                p: 3,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
                borderLeft: '4px solid #5f6ef4',
                borderRadius: 3,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  color: '#5f6ef4',
                }}
              >
                フロントエンド
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {frontendSkills.map((skill) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    size="small"
                  />
                ))}
              </Box>
            </Card>

            {/* Design Skills */}
            <Card
              sx={{
                p: 3,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
                borderLeft: '4px solid #02bcd4',
                borderRadius: 3,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  color: '#02bcd4',
                }}
              >
                スタイリング・デザイン
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {designSkills.map((skill) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    size="small"
                  />
                ))}
              </Box>
            </Card>

            {/* Tools & Environment */}
            <Card
              sx={{
                p: 3,
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
                borderLeft: '4px solid #4caf50',
                borderRadius: 3,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  color: '#4caf50',
                }}
              >
                ツール・環境
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {toolSkills.map((skill) => (
                  <Chip
                    key={skill.name}
                    label={skill.name}
                    size="small"
                  />
                ))}
              </Box>
            </Card>
          </Box>
        </Box>

        {/* Contact Section */}
        <Card
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: '#fafafa',
            borderRadius: 3,
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              mb: 2,
            }}
          >
            SNS・その他
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              mb: 3,
            }}
          >
            その他の作品やお問い合わせはSNSよりお気軽にご連絡ください。
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Box
              component="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: '50%',
                bgcolor: '#333',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 2,
                },
              }}
            >
              <GitHubIcon />
            </Box>
            <Box
              component="a"
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: '50%',
                bgcolor: '#000',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 2,
                },
              }}
            >
              <XIcon />
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
}
