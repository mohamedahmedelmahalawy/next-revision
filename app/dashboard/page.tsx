import Link from "next/link";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link href="/dashboard/reports">Go to Reports</Link>
      </div>
      <div>
        <Link href="/profile">Go to Profile</Link>
      </div>
      <div>
        <Link href="/dashboard/section">Go to Section</Link>
      </div>
    </div>
  );
}

export default Dashboard;
