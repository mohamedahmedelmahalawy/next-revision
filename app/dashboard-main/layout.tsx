import Link from "next/link";

interface DashboardMainLayoutProps {
  //   feed: React.ReactNode;
  //   stats: React.ReactNode;
  tabone: React.ReactNode;
  tabtwo: React.ReactNode;
}

function DashboardMainLayout({
  //   feed,
  //   stats,
  tabone,
  tabtwo,
}: DashboardMainLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      {/* <div className="bg-amber-400 basis-full">{feed}</div>
      <div className="bg-teal-700 basis-full">{stats}</div> */}
      <div>
        <Link href="/dashboard-main/tabone">Tab One</Link>
        <span> | </span>
        <Link href="/dashboard-main/tabtwo">Tab Two</Link>
      </div>
      {tabone}
      {tabtwo}
    </div>
  );
}

export default DashboardMainLayout;
