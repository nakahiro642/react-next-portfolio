import { getPortfolioList } from '@/app/_libs/microcms';

export async function GET() {
  try {
    const portfolioData = await getPortfolioList();
    return Response.json(portfolioData);
  } catch (error) {
    console.error('Failed to fetch portfolio:', error);
    return Response.json({ contents: [], totalCount: 0, offset: 0, limit: 0 }, { status: 500 });
  }
}
