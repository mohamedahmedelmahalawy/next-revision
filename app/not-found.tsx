import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-16 bg-white h-screen text-black">
      <Image src={"/not-found.svg"} alt="not found" width={600} height={600} />
      <Link href="/" className="bg-violet-500 px-4 py-2 rounded-lg text-white">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
