"use client";

import Image from "next/image";

export default function ProgramsPage() {
    const programs = [
        {
            level: "Kindergarten",
            description:
                "A fun and nurturing foundation in Christian learning.",
        },
        {
            level: "Elementary",
            description: "Developing curiosity and academic fundamentals.",
        },
        {
            level: "Junior High School",
            description: "Building strong values and academic discipline.",
        },
        {
            level: "Senior High School",
            description: "Preparing for college and careers with excellence.",
        },
        {
            level: "College",
            description:
                "Offering higher education rooted in biblical principles.",
        },
    ];

    return (
        <main
            style={{
                backgroundColor: "#f2f7ff",
                minHeight: "100vh",
                padding: "40px 20px",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "2.5rem",
                        color: "#003366",
                        marginBottom: "40px",
                        fontWeight: "bold",
                    }}
                >
                    Programs Offered
                </h1>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "12px",
                                padding: "20px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform =
                                    "scale(1.03)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                            }
                        >
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    color: "#004080",
                                    marginBottom: "10px",
                                    fontWeight: 600,
                                }}
                            >
                                {program.level}
                            </h2>
                            <p
                                style={{
                                    fontSize: "1rem",
                                    color: "#333",
                                    lineHeight: "1.5",
                                }}
                            >
                                {program.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Cloudinary Image */}
            <Image
                src="https://res.cloudinary.com/dkwtqyspn/image/upload/v1743859141/Sep_29_2023_XF23mmF2_R_WR_320_1-250_s_pbudgh.jpg"
                alt="BSCA Campus"
                width={600} // Half the width of the original image (1200 / 2)
                height={400} // Half the height of the original image (800 / 2)
                style={{
                    borderRadius: "20px",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                    objectFit: "cover",
                    marginTop: "20px", // Added padding on top
                    textAlign: "center",
                }}
            />
        </main>
    );
}
