import { getAboutProfile } from '@/app/_libs/microcms';

export async function GET() {
  try {
    const profileData = await getAboutProfile();
    return Response.json(profileData);
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    return Response.json({ contents: [], totalCount: 0, offset: 0, limit: 0 }, { status: 500 });
  }
}
