import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-200">
      <div className="flex justify-center bg-gray-800">
        <Image 
          src="Conference_CanvaSplash.svg"
          width={1200}
          height={1200}
          alt="SEA Conference Canva Splash Image"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-18 h-96 font-mono tracking-wide text-4xl text-violet-900">
        <h1 className="font-bold">ISMP Southeast Asia Conference</h1>
        <h1>Thursday, April 23, 2026 - Sunday, April 26, 2026</h1>
        <h1>Bangkok, Thailand</h1>
      </div>
      <div className="flex justify-center bg-black">
        <video className="w-6xl" controls preload="metadata"> 
          <source src="/promoVideo.mp4#t=0.1" type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center my-24">
        <Link
          href="/signup"
          className="rounded-4xl bg-violet-600 px-9 py-5 text-4xl font-semibold text-white shadow hover:bg-violet-500"
        >
          Sign Up and join us!
        </Link>
      </div>
    </div>
  );
}
