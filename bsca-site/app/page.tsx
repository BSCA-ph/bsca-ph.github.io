'use client';

import Image from 'next/image';
import bscalogo from '../public/BSCA Logo.jpg';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#f0f4f8', padding: '50px 20px' }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '50px 20px',
          background: 'linear-gradient(135deg, #003366 0%, #1e3a8a 100%)',
          color: '#fff',
          borderRadius: '20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Image src={bscalogo} alt="BSCA Logo" width={100} height={100} className="mx-auto mb-6" />
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            Baguio Siloam Christian Academy
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 auto',
              marginBottom: '2rem',
            }}
          >
            Excellence in education, rooted in Christian faith and values.
          </p>
          <div style={{ marginTop: '30px' }}>
            <a
              href="/admissions"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#ffffff',
                color: '#003366',
                fontWeight: 'bold',
                borderRadius: '50px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e2e8f0')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Banner */}
      <section
        style={{
          backgroundColor: '#ffffff',
          color: '#003366',
          padding: '50px 20px',
          borderRadius: '20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
          marginTop: '40px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Welcome to BSCA
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            We are a Christ-centered school dedicated to developing young minds academically and spiritually. Discover our
            programs, community, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section
        style={{
          backgroundColor: '#e0f7fa',
          padding: '50px 20px',
          borderRadius: '20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
          marginTop: '40px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '2rem',
              color: '#004080',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Our History
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#003366' }}>
            Established in 2003, BSCA began as a small learning center with a big vision—to provide affordable, high-quality
            Christian education in Baguio City. Today, we serve students from Kindergarten to College, building a legacy of
            excellence and faith.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '50px 20px',
          borderRadius: '20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
          marginTop: '40px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '2rem',
              color: '#004080',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Why Choose BSCA?
          </h2>
          <ul style={{ fontSize: '1.1rem', color: '#003366', lineHeight: '1.8', paddingLeft: '20px', textAlign: 'left' }}>
            <li>✓ Small class sizes for personalized attention</li>
            <li>✓ Christian-centered curriculum and values</li>
            <li>✓ Strong academic foundation from K to College</li>
            <li>✓ Dedicated and compassionate educators</li>
            <li>✓ Active student life and community involvement</li>
          </ul>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        style={{
          backgroundColor: '#003366',
          padding: '50px 20px',
          borderRadius: '20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
          marginTop: '40px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#ffffff' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            Our Mission & Vision
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            <strong>Mission:</strong> To raise academically excellent and Christ-centered individuals who will lead and serve
            with integrity and compassion.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            <strong>Vision:</strong> To be a premier Christian educational institution nurturing lifelong learners and leaders for
            God’s glory.
          </p>
        </div>
        
      </section>
       {/* Social Media Section */}
       <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003366', marginBottom: '1rem' }}>
          Connect with Us
        </h2>
        <div style={{ fontSize: '1.25rem', color: '#333' }}>
          <p>Follow us on our social media accounts:</p>
          <div style={{ marginTop: '15px' }}>
            <a
              href="https://www.facebook.com/baguio.siloam.2025"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4267B2',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginRight: '20px',
              }}
            >
              Facebook
            </a>
            <a
              href="#" // Replace with actual Instagram link once available
              style={{
                color: '#C13584',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
