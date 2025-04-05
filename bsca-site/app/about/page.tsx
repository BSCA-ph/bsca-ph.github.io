"use client";

import { Card } from "flowbite-react";

const aboutContent = [
    {
        title: "Our Vision",
        content:
            "To nurture young minds to grow in wisdom, character, and faith, becoming leaders of integrity in a changing world.",
    },
    {
        title: "Our Mission",
        content:
            "Baguio Siloam Christian Academy aims to provide quality Christian education, fostering academic excellence and spiritual growth.",
    },
    {
        title: "Core Values",
        content:
            "Integrity, Excellence, Faith, Service, and Stewardship. These are the pillars we build our community on.",
    },
];

export default function AboutPage() {
    return (
        <section className="min-h-screen px-6 py-12 bg-gray-100">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-900 mb-10">
                    About Us
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {aboutContent.map((section, index) => (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {section.title}
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
