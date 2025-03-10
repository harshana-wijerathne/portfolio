import React from 'react';

export default function ExperienceCard({ title, details }) {
    return (
        <div className="card bg-dark text-white shadow-sm border-0 rounded-4 h-100">
            <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-4">{title}</h5>
                {details.map((item, index) => (
                    <div key={index} className="mb-3">
                        <p className="mb-1">{item.role}</p>
                        {item.period && <small className="text-secondary">{item.period}</small>}
                        {index !== details.length - 1 && <hr className="border-secondary mt-3" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
