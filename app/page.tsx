import Image from 'next/image';
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "./_components/NewsList"; 
import { Container, Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', sm: '400px', md: '500px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/img-mv.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
            filter: 'brightness(0.6)',
          },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            }}
          >
            テクノロジーの力で世界を変える
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.95,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            }}
          >
            市場をリードしているグローバルテックカンパニーです
          </Typography>
        </Box>
      </Box>

      {/* News Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              textAlign: { xs: 'center', sm: 'left' },
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              color: 'primary.main',
            }}
          >
            News
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <NewsList news={data.contents} />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="/news"
              sx={{
                textTransform: 'none',
                fontSize: '1.1rem',
                px: 4,
              }}
            >
              もっと見る
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}