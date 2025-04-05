import Image from 'next/image';
import bscalogo from '../public/BSCA Logo.jpg'; // make sure your logo is here!

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-blue-900 to-blue-800 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Image src={bscalogo} alt="BSCA Logo" width={100} height={100} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Baguio Siloam Christian Academy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Excellence in education, rooted in Christian faith and values.
          </p>
          <div className="mt-8">
            <a
              href="/admissions"
              className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Banner */}
      <section className="bg-white text-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to BSCA</h2>
          <p className="text-lg">
            We are a Christ-centered school dedicated to developing young minds academically and spiritually.
            Discover our programs, community, and commitment to excellence.
          </p>
        </div>
      </section>
    </main>
  );
}
