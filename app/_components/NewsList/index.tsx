import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardMedia, CardContent, Grid, Typography } from "@mui/material";

import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <Typography>記事がありません。</Typography>;
    }
    return (
        <Grid container spacing={3}>
            {news.map((article) => (
                <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <Card
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: 4,
                            },
                            cursor: 'pointer',
                        }}
                        component={Link}
                        href={`/news/${article.id}`}
                    >
                        <CardMedia
                            sx={{
                                height: 200,
                                position: 'relative',
                                backgroundColor: '#f0f0f0',
                            }}
                        >
                            {article.thumbnail ? (
                                <Image
                                    src={article.thumbnail.url}
                                    alt=""
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            ) : (
                                <Image
                                    src="/no-image.png"
                                    alt="No Image"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            )}
                        </CardMedia>
                        <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                            <Typography
                                variant="h6"
                                component="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 1,
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                }}
                            >
                                {article.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    flexWrap: 'wrap',
                                }}
                            >
                                {article.category && <Category category={article.category} />}
                                {article.publishedAt && <Date date={article.publishedAt} />}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}