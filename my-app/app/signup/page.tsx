import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="p-10 min-h-screen bg-yellow-200">
      <h1 className="text-4xl font-bold mb-6">Sign Up</h1>

      {/* Thailand Note */}
      <div className="bg-yellow-100 p-4 rounded-md mb-6 border border-yellow-400">
        <p className="font-semibold">
          Note: This signup is for those who live in Thailand! 
          If you are from another country, please ask your mentors 
          for the link to your own signup.
        </p>
      </div>

      {/* Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSctPtGKMV56sSWPJBU27c4Gyr3xi_eYaHnSLow7v4p1DJqOPA/viewform?embedded=true"
        width="100%"
        height="800"
        className="border-none"
      >
        Loading…
      </iframe>
    </div>
  );
}