'use client';

export default function AdmissionsPage() {
  return (
    <main style={{ backgroundColor: '#f4f6f9', padding: '50px 20px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#003366', fontWeight: 'bold' }}>
          Admissions
        </h1>
        <p style={{ textAlign: 'center', color: '#333', fontSize: '1.1rem', marginBottom: '40px' }}>
          We welcome students from Kindergarten to College. Discover how to become part of our Christ-centered academic community.
        </p>

        {/* Steps Section */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#004080', marginBottom: '15px' }}>How to Apply</h2>
          <ol style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8' }}>
            <li>1. Visit the school or call us for inquiries.</li>
            <li>2. Fill out the application form and submit required documents.</li>
            <li>3. Attend the scheduled entrance exam and interview.</li>
            <li>4. Wait for the results and confirmation.</li>
            <li>5. Settle the fees and receive enrollment confirmation.</li>
          </ol>
        </div>

        {/* Requirements Section */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#004080', marginBottom: '15px' }}>Admission Requirements</h2>
          <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8' }}>
            <li>✔️ PSA Birth Certificate (photocopy)</li>
            <li>✔️ Form 138 / Report Card</li>
            <li>✔️ Certificate of Good Moral Character</li>
            <li>✔️ 2x2 ID Photos (2 copies)</li>
            <li>✔️ Entrance Exam (administered by the school)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#004080', marginBottom: '10px' }}>Get in Touch</h2>
          <p style={{ color: '#333', marginBottom: '8px' }}>
            📞 Phone: (074) 123-4567
          </p>
          <p style={{ color: '#333', marginBottom: '8px' }}>
            ✉️ Email: admissions@bsca.edu.ph
          </p>
          <p style={{ color: '#333' }}>
            📍 Address: 123 Faith St., Baguio City
          </p>
        </div>
      </div>
    </main>
  );
}
