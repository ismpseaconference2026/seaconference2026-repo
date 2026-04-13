import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-200">
      <div>
        
      </div>
      <div className="flex flex-col justify-center items-center text-violet-900">
        <h1>ISMP Southeast Asia Conference</h1>
        <h1>Thursday, April 23, 2026 - Sunday, April 26, 2026</h1>
        <h1>Bangkok, Thailand</h1>
      </div>
      <div className="flex justify-center">
        <Link
          href="/signup"
          className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-500"
        >
          Sign Up and join us!
        </Link>
      </div>
    </div>
  );
}
