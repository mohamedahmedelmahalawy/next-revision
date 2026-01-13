export default async function UsersPage() {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
}
