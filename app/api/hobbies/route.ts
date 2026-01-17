import { getHobbyList } from '@/app/_libs/microcms';

export async function GET() {
  try {
    const hobbyData = await getHobbyList();
    return Response.json(hobbyData);
  } catch (error) {
    console.error('Failed to fetch hobbies:', error);
    return Response.json({ contents: [], totalCount: 0, offset: 0, limit: 0 }, { status: 500 });
  }
}
