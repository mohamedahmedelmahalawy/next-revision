interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  console.log(await params);
  return (
    <div>
      <h1>Hi from DocsTwo</h1>
      <h2>{slug?.join("/")}</h2>
      <h3>I am heading 3</h3>
    </div>
  );
}
