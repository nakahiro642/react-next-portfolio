'use client';

import { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

interface AboutProfile {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
}

interface Hobby {
  id: string;
  name: string;
  description: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
}

export default function About() {
  const [aboutData, setAboutData] = useState<AboutProfile | null>(null);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, hobbiesRes] = await Promise.all([
          fetch('/api/about-profile'),
          fetch('/api/hobbies'),
        ]);
        
        const profileData = await profileRes.json();
        const hobbiesData = await hobbiesRes.json();
        
        setAboutData(profileData.contents?.[0] || null);
        setHobbies(hobbiesData.contents || []);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        component="div"
        suppressHydrationWarning
        sx={{
          position: 'relative',
          height: { xs: '180px', sm: '220px', md: '280px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #5f6ef4 0%, #02bcd4 100%)',
          color: 'white',
          mb: 6,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
          borderRadius: '12px',
          mt: 4,
        }}
      >
        <Box sx={{ textAlign: 'center', zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 400,
              letterSpacing: '-0.015625rem',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              animation: 'slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              '@keyframes slideInDown': {
                'from': {
                  opacity: 0,
                  transform: 'translateY(-20px)',
                },
                'to': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            About
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{
              mt: 1,
              fontWeight: 300,
              letterSpacing: '0.03125rem',
              opacity: 0.95,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              animation: 'slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both',
              '@keyframes slideInUp': {
                'from': {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                'to': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            私について詳しく
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 8, pt: 4 }}>
        {/* Profile Section */}
        <Box sx={{ mb: 8, p: 4, bgcolor: 'rgba(95, 110, 244, 0.04)', borderRadius: 2 }}>
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
            私について詳しく
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
            プロフィール、経歴、学習内容についてご紹介します。
          </Typography>

          <Card
            sx={{
              p: 4,
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'background.paper',
              borderRadius: 3,
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr 2fr',
                },
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: '200px',
                    height: '200px',
                    bgcolor: '#f5f5f5',
                    borderRadius: '50%',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#bdbdbd',
                    mb: 2,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {aboutData?.image?.url ? (
                    <Box
                      component="img"
                      src={aboutData.image.url}
                      alt={aboutData.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    '📷'
                  )}
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  {aboutData?.name || '名前'}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {aboutData?.position || '職種'}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  {aboutData?.bio || 'プロフィール'}
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 8, p: 4, bgcolor: 'rgba(2, 188, 212, 0.04)', borderRadius: 2 }}>
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
            経歴
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Entry 1 */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#5f6ef4',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(95, 110, 244, 0.35)',
                  }}
                >
                  <SchoolIcon />
                </Box>
                <Box sx={{ width: 2, flexGrow: 1, bgcolor: 'rgba(0,0,0,0.12)', mt: 1 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    color: '#5f6ef4',
                  }}
                >
                  京都テクノロジー&デザイン専門学校入学
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  2025年4月
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  ITプログラマー専攻に所属。 Web開発の基礎などを学び始めました。
                </Typography>
              </Box>
            </Box>

            {/* Entry 2 */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#02bcd4',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(2, 188, 212, 0.35)',
                  }}
                >
                  <CodeIcon />
                </Box>
                <Box sx={{ width: 2, flexGrow: 1, bgcolor: 'rgba(0,0,0,0.12)', mt: 1 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    color: '#02bcd4',
                  }}
                >
                  HTML/CSSの学習完了
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  2025年10月
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  基本的なHTML/CSSスキルを習得しました。
                </Typography>
              </Box>
            </Box>

            {/* Entry 3 */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#4caf50',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(76, 175, 80, 0.35)',
                  }}
                >
                  <CodeIcon />
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    color: '#4caf50',
                  }}
                >
                  TypeScriptとReactの学習進行中
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  2025年10月〜現在
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  TypeScript、React、Next.jsを学習中。
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Learning & Development */}
        <Box sx={{ mb: 8, p: 4, bgcolor: 'rgba(76, 175, 80, 0.04)', borderRadius: 2 }}>
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
            学習内容・技術
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                lg: '1fr 1fr',
              },
              gap: 4,
            }}
          >
            <Box>
              <Card
                sx={{
                  p: 3,
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#fafafa',
                  borderLeft: '4px solid #5f6ef4',
                  borderRadius: 3,
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    color: '#5f6ef4',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <CodeIcon fontSize="small" />
                  取り組み中の技術
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  React、Next.js、TypeScriptなどの最新のフロントエンド技術を学習中です。
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="React" size="small" />
                  <Chip label="Next.js" size="small" />
                  <Chip label="TypeScript" size="small" />
                </Box>
              </Card>
            </Box>
            <Box>
              <Card
                sx={{
                  p: 3,
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#fafafa',
                  borderLeft: '4px solid #02bcd4',
                  borderRadius: 3,
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    color: '#02bcd4',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <CodeIcon fontSize="small" />
                  習得した技術
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  HTMLやcssを学び、基礎的なWeb制作スキルを習得。C言語も基礎的に理解しています。
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  <Chip label="HTML" size="small" />
                  <Chip label="CSS" size="small" />
                  <Chip label="C言語" size="small" />
                </Box>
              </Card>
            </Box>
          </Box>
        </Box>

        {/* Skills & Expertise Grid */}
        <Box sx={{ mb: 8, p: 4, bgcolor: 'rgba(95, 110, 244, 0.04)', borderRadius: 2 }}>
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
            興味・趣味
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {hobbies.map((hobby) => {
              const colors = ['#5f6ef4', '#02bcd4', '#4caf50'];
              const colorIndex = hobbies.indexOf(hobby) % colors.length;
              const color = colors[colorIndex];
              
              return (
                <Box key={hobby.id}>
                  <Card
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.08) 0%, rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.02) 100%)`,
                      border: `1px solid rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.1)`,
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                      borderRadius: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        boxShadow: `0 8px 16px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`,
                        transform: 'translateY(-4px)',
                        background: `linear-gradient(135deg, rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.12) 0%, rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.06) 100%)`,
                      },
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: color,
                      }}
                    >
                      {hobby.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ lineHeight: 1.8, mb: 2 }}
                    >
                      {hobby.description}
                    </Typography>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
}
