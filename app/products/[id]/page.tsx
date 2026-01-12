interface ProductsIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductsIdPage({ params }: ProductsIdPageProps) {
  const { id } = await params;
  return <div>Product ID: {id}</div>;
}
