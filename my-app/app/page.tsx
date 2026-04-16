import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-200">
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/kaeng-krachan-view.jpg"
          fill={true}
          alt="kaegn krachan park view"
          className="object-cover opacity-60 blur-[4px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">ISMP Southeast Asia Conference 2026</h1>
        </div>
      </div>
      {/* <div className="flex justify-center bg-gray-800">
        <Image 
          src="Conference_CanvaSplash.svg"
          width={1200}
          height={1200}
          alt="SEA Conference Canva Splash Image"
        />
      </div> */}
      <div className="flex flex-col justify-center items-center space-y-18 h-[46vh] sm:h-[40vh] md:h-[43vh] lg:h-[46vh] font-mono tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl text-violet-900">
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
          className="rounded-4xl bg-violet-600 px-5 lg:px-9 py-3 lg:py-5 text-xl lg:text-4xl font-semibold text-white shadow hover:bg-violet-500"
        >
          Sign Up and join us!
        </Link>
      </div>
    </div>
  );
}
