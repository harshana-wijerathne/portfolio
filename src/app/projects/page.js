import React from 'react';
import ProjectCard from '@/(component)/ProjectCard';

export default function ProjectsPage() {
    const projects = [
        {
            image: 'chatapp.png',
            title: 'ChatApp | Mern Stack',
            description:
                'A complete e-commerce solution built with Next.js, featuring product management and a shopping cart - developed to experiment with Next.js features.',
            demoLink: '#', // Replace with your actual link
            codeLink: '#',  // Replace with your GitHub repo
        },
        {
            image: 'chatapp.png',
            title: 'SkyDesk | Remote Desktop App',
            description:
                'A desktop app for file encryption with password protection that secures file metadata, allowing only authorized users to access or edit it.',
            demoLink: '#',
            codeLink: '#',
        },
        {
            image: 'chatapp.png',
            title: 'Athena Web Browser',
            description:
                'A custom web server project demonstrating HTTP protocol fluency by redirecting requests and serving custom content.',
            demoLink: '#',
            codeLink: '#',
        },
    ];

    return (
        <section className="bg-black text-white py-5 px-3 min-vh-100 mt-5">
            <div className="container">
                {/* Title */}
                <h2 className="display-4 fw-bold mb-4 text-center">
                    My <span className="text-primary">Projects</span>
                </h2>

                {/* Project Cards */}
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            demoLink={project.demoLink}
                            codeLink={project.codeLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
