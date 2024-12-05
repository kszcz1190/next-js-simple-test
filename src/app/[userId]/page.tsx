import PageClient from "./page-client";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return <PageClient userId={userId} />;
}
