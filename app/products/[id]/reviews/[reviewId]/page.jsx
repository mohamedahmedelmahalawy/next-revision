export default async function page({ params }) {
  const { id, reviewId } = await params;

  console.log(await params);
  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Review Id: {reviewId}</h1>
    </div>
  );
}
