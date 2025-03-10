import React from 'react';

export default function ProjectCard({ image, title, description, demoLink, codeLink }) {
    return (
        <div className="col-md-6 col-lg-4 d-flex">
            <div className="card bg-dark text-white shadow-sm border-0 rounded-4 flex-fill">
                {/* Image */}
                <img src={image} alt={title} className="card-img-top rounded-top-4" style={{ height: '220px', objectFit: 'cover' }} />

                {/* Content */}
                <div className="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                        <h5 className="card-title fw-bold mb-3">{title}</h5>
                        <p className="card-text text-secondary">{description}</p>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2 mt-4">
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm rounded-pill px-3">
                                Live Demo
                            </a>
                        )}
                        {codeLink && (
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-pill px-3">
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
