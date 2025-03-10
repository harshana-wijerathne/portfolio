import React from 'react';
import { Code, Monitor, Database, PenTool } from 'lucide-react';

const icons = {
    web: <Code size={40} color="#ffc107" />,
    desktop: <Monitor size={40} color="#ffc107" />,
    backend: <Database size={40} color="#ffc107" />,
    uiux: <PenTool size={40} color="#ffc107" />,
};

export default function InfoCard({ type, title, description }) {
    return (
        <div className="card bg-dark text-white h-100 shadow-sm border-0 rounded-4">
            <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
                <div className="mb-3">{icons[type]}</div>
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text text-secondary">{description}</p>
            </div>
        </div>
    );
}
