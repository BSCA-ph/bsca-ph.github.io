'use client';

const newsEvents = [
  {
    title: 'BSCA Celebrates Foundation Day',
    date: 'March 15, 2025',
    summary: 'Students, teachers, and alumni gathered to celebrate BSCA’s 15th Foundation Day with a program and fellowship.',
  },
  {
    title: 'Enrollment for SY 2025-2026 is Now Open',
    date: 'April 1, 2025',
    summary: 'Parents and guardians can now enroll their children for the upcoming school year. Visit the registrar’s office for details.',
  },
  {
    title: 'Senior High Career Orientation Week',
    date: 'February 25, 2025',
    summary: 'Grade 11 and 12 students participated in talks with professionals from various fields as part of career readiness initiatives.',
  },
  {
    title: 'Christmas Musical and Bazaar',
    date: 'December 10, 2024',
    summary: 'BSCA hosted a musical performance and mini-bazaar to bring the community together and showcase student talent.',
  },
];

export default function NewsAndEvents() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        backgroundColor: '#f9fafc',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          News & Events
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {newsEvents.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                padding: '1.5rem',
                borderLeft: '6px solid #2563eb',
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#111827',
                }}
              >
                {item.title}
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                {item.date}
              </p>
              <p style={{ fontSize: '1rem', color: '#374151' }}>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
