import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import projects from '../data/projects'; // Assuming you have a separate data file

const ProjectPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="mt-2">{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        View Live Project
                    </a>
                    {/* Add a Link to the project details page */}
                    <Link
                        to={`/projects/${index}`} // Use index as a simple identifier
                        className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                        Project Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProjectPage;
