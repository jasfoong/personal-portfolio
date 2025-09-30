interface Project {
    title: string;
    tech: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Physical 100 Encyclopedia',
        tech: 'React, NodeJS, Express, MySQL, Sass',
        description: 'A catalogue of all contestants and challenges in the Netflix series: Physical 100',
        link: 'https://physical100encyclopedia.netlify.app/'
    },
    {
        title: 'Green Spaces of Vancouver',
        tech: 'JavaScript, LeafletJS, Tailwind CSS',
        description: 'A map of all community gardens and parks in Vancouver, with popup information on click',
        link: 'https://github.com/jasfoong/green-spaces-vancouver'
    },
    {
        title: 'Personal Portfolio',
        tech: 'React, TypeScript, Tailwind',
        description: 'Single page app to showcase all my projects',
        link: 'https://jasminefoong.com/'
    }
]

const ProjectTable: React.FC = () => {
    return (
        <section className="py-4 md:py-4 rounded-lg md:text-left mx-auto max-w-4xl my-40" id="projects">
        <h2 className="text-2xl mb-4 font-sans text-center md:text-left">PROJECTS</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-black">
                <thead className="font-sansMono">
                    <tr>
                        <th className="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                        <th className="pr-6 pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tech Stack</th>
                        <th className="pr-6 pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black font-sansMono text-sm">
                    {projects.map((project, index) => (
                        <tr key={index}>
                            <td className="pr-6 py-4 text-left">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-300">
                                    {project.title}
                                </a>
                            </td>
                            <td className="px-6 py-4 text-left">{project.tech}</td>
                            <td className="px-6 py-4 text-left">{project.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </section>
    )
}

export default ProjectTable;