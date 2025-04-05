'use client';

import Image from 'next/image';
import bscalogo from '../../public/BSCA Logo.jpg';

const aboutContent = [
  {
    title: 'Our Vision',
    content:
      'To nurture young minds to grow in wisdom, character, and faith, becoming leaders of integrity in a changing world.',
    image: bscalogo,
  },
  {
    title: 'Our Mission',
    content:
      'Baguio Siloam Christian Academy aims to provide quality Christian education, fostering academic excellence and spiritual growth.',
    image: bscalogo,
  },
  {
    title: 'Core Values',
    content:
      'Integrity, Excellence, Faith, Service, and Stewardship. These are the pillars we build our community on.',
    image: bscalogo,
  },
];

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#003366',
            marginBottom: '40px',
            fontWeight: 'bold',
          }}
        >
          About Us
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          {aboutContent.map((section, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
              }}
            >
              <h2
                style={{
                  fontSize: '1.5rem',
                  color: '#004080',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                {section.title}
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#333',
                  lineHeight: '1.5',
                  marginBottom: '15px',
                }}
              >
                {section.content}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src={section.image}
                  alt={section.title}
                  width={160}
                  height={160}
                  style={{
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
