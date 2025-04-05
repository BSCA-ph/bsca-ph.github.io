'use client';

const programs = [
  {
    title: 'Kindergarten',
    description:
      'A warm and nurturing environment focused on early learning foundations in reading, math, and values.',
  },
  {
    title: 'Elementary',
    description:
      'Comprehensive academic and spiritual development from Grades 1 to 6, focusing on character and competence.',
  },
  {
    title: 'Junior High School',
    description:
      'Grades 7 to 10 prepare students with advanced knowledge and skills, guided by Christian principles.',
  },
  {
    title: 'Senior High School',
    description:
      'Grades 11 and 12 offer academic and technical-vocational tracks aligned with the student’s future goals.',
  },
  {
    title: 'College (Coming Soon)',
    description:
      'BSCA aims to expand into higher education to equip future leaders with both faith and excellence.',
  },
];

export default function ProgramsPage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        backgroundColor: '#eef2f7',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '2.5rem',
          }}
        >
          Our Programs
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {programs.map((program, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '1.5rem',
                textAlign: 'left',
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '0.75rem',
                }}
              >
                {program.title}
              </h2>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#555555',
                }}
              >
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
