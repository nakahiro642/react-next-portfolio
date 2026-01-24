import { getSiteIcon } from '@/app/_libs/microcms';

export async function GET() {
  try {
    const iconData = await getSiteIcon();
    return Response.json(iconData);
  } catch (error) {
    console.error('Failed to fetch site icon:', error);
    return Response.json({ contents: [], totalCount: 0, offset: 0, limit: 0 }, { status: 500 });
  }
}
