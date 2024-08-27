import ProjectTable from '../components/ProjectTable'

const HomePage: React.FC = () => {
    return (
        <div className="bg-pastel-green min-h-screen font-sansMono">
            <header className="hidden lg:flex fixed top-0 left-0 right-0 flex-row justify-between items-center p-4 bg-white">
                <h2 className="text-base md:text-sm tracking-wider font-sansMono"><a href="/">JASMINEFOONG.COM</a></h2>
                <h2 className="text-base md:text-sm tracking-wider font-sansMono text-center mt-2 sm:mt-0">SOFTWARE DEVELOPER | CLIMATE TECH</h2>
                <div className="flex flex-row sm:flex-row space-x-2 sm:space-x-4 items-center mt-2 sm:mt-0">
                    <a href="https://github.com/jasfoong" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
                        <img src="/github-astatine.png" alt="GitHub" className="w-full h-full" />
                    </a>
                    <a href="https://www.linkedin.com/in/jasmine-foong" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
                        <img src="/linkedin-iconbaandar.png" alt="LinkedIn" className="w-full h-full" />
                    </a>
                    <a href="mailto:jasfoong19@gmail.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
                        <img src="/email-iconbaandar.png" alt="Email" className="w-full h-full" />
                    </a>
                </div>
            </header>
            <main className="pt-20 pb-12 px-4 sm:px-8">
                <div className="text-center md:text-left mx-auto max-w-4xl my-40">
                    <h1 className="text-3xl sm:text-4xl mb-2 font-sans">I'M JASMINE</h1>
                    <h2 className="text-base sm:text-lg mb-4">Software developer in Canada.</h2>
                    <h3 className="text-sm sm:text-base mb-4">My early experiences in journalism & digital media have sparked a curiosity about life on Earth and a deep passion to preserve it. I hope to leverage my programming skills to advance climate technology and contribute to sustainable solutions for our planet.</h3>
                    <a href="#projects">
                        <button className="bg-white text-black border border-black mt-8 py-2 px-4 rounded-full font-sansMono hover:bg-gray-100">
                            See my work
                        </button>
                    </a>
                </div>
                <hr className="border-t border-black mt-12"></hr>
                <ProjectTable />
            </main>
        </div>
    )
}

export default HomePage;