import Link from "next/link";

function SectionPage() {
  return (
    <div>
      <h1>SectionPage</h1>
      <div>
        <Link href="/setting">Go to Setting</Link>
      </div>
      <div>
        <Link href="/admin">Go to Admin</Link>
      </div>
    </div>
  );
}

export default SectionPage;
