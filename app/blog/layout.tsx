import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '記録',
  description: '私が思っていること',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
