import React from 'react';
import InfoCard from './InfoCard';
import ExperienceCard from './ExperienceCard';

export default function AboutSection() {
    const experience = [
        { role: 'Intern Software Developer @ IJSE', period: '2024 - Present' },
        { role: 'Industrial Training @ GVP Lanka', period: '2023-Jan - 2023-July' },
    ];

    const education = [
        { role: 'Advanced level, Kegalu Vidyalaya' , period: '2023 - 2023'},
        { role: 'BSc(Hons) in Engineering from University of Moratuwa, Sri Lanka', period: '2020 - 2024' },
    ];

    return (
        <section className="bg-black text-white py-5 px-3 min-vh-100">
            <div className="container">
                {/* Title */}
                <h2 className="display-4 fw-bold mb-4">
                    About <span className="text-primary">Me</span>
                </h2>

                {/* Description */}
                <p className="lead text-secondary mb-3" style={{ maxWidth: '100%' }}>
                    I am a dedicated Graduate Engineer from the University of Moratuwa with a strong passion for exploring and expanding
                    my knowledge in the software industry. I am eager to pursue opportunities in the IT industry to advance my career
                    as a Software Engineer
                </p>
                <p className="text-muted mb-5" style={{ maxWidth: '100%' }}>
                    As a fast learner, collaborative team player, and enthusiastic technologist, I am driven by the
                    desire to apply technology in solving real-world challenges. I look forward to working with professionals who share my
                    commitment to excellence and my enthusiasm for innovation.
                </p>

                {/* Info Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <InfoCard
                            type="web"
                            title="Web Development"
                            description="Developing responsive and dynamic web apps with Node.js, Express, and Next.js."
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InfoCard
                            type="desktop"
                            title="Desktop Apps"
                            description="Developing cross-platform desktop applications with Java and Spring Framework."
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InfoCard
                            type="backend"
                            title="Backend Development"
                            description="Building robust backend systems with Jakarta EE, Spring Boot, Node.js, and SQL/MongoDB."
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InfoCard
                            type="uiux"
                            title="UI/UX Design"
                            description="Creating intuitive and visually appealing user interfaces with Figma."
                        />
                    </div>
                </div>

                {/* Experience & Education */}
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <ExperienceCard title="Experience" details={experience} />
                    </div>
                    <div className="col-12 col-md-6">
                        <ExperienceCard title="Education" details={education} />
                    </div>
                </div>
            </div>
        </section>
    );
}
