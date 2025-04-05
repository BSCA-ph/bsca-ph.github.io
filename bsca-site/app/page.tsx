import Image from 'next/image';
import bscalogo from '../public/BSCA Logo.jpg';

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

      {/* History Section */}
      <section className="bg-blue-100 text-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="text-lg">
            Established in 2003, BSCA began as a small learning center with a big vision—to provide affordable, high-quality Christian education in Baguio City. Today, we serve students from Kindergarten to College, building a legacy of excellence and faith.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white text-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose BSCA?</h2>
          <ul className="text-lg space-y-4">
            <li>✓ Small class sizes for personalized attention</li>
            <li>✓ Christian-centered curriculum and values</li>
            <li>✓ Strong academic foundation from K to College</li>
            <li>✓ Dedicated and compassionate educators</li>
            <li>✓ Active student life and community involvement</li>
          </ul>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-lg mb-6">
            <strong>Mission:</strong> To raise academically excellent and Christ-centered individuals who will lead and serve with integrity and compassion.
          </p>
          <p className="text-lg">
            <strong>Vision:</strong> To be a premier Christian educational institution nurturing lifelong learners and leaders for God’s glory.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white text-blue-900 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Campus Life & Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image src={bscalogo} alt="BSCA Event 1" className="rounded-lg shadow-md" />
            <Image src={bscalogo} alt="BSCA Event 2" className="rounded-lg shadow-md" />
            <Image src={bscalogo} alt="BSCA Event 3" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
}
