import React, { useState } from 'react'
import ProjectTable from '../components/ProjectTable'

const HomePage: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="min-h-screen font-sansMono">
            <header className="flex fixed top-0 left-0 right-0 z-50 justify-between items-center p-4 bg-white">
                <button
                    onClick={toggleDarkMode}
                    className="invisible md:visible ml-4 p-2 bg-gray-300 text-sm text-black rounded-md hover:bg-gray-400 dark:bg-gray-700 dark:text-white"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <h2 className="text-base md:text-sm tracking-wider font-sansMono"><a href="/">JASMINEFOONG.COM</a></h2>
                <div className="invisible md:visible flex space-x-2 sm:space-x-4 items-center mt-2 sm:mt-0">
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
            <main className={`pt-20 pb-12 px-4 sm:px-8 ${darkMode ? 'bg-black text-white' : 'bg-pastel-green text-black'
                }`}>
                <div className="text-center md:text-left mx-auto max-w-4xl my-40">
                    <h1 className="text-3xl sm:text-4xl mb-2 font-sans">I'M JASMINE,</h1>
                    <h2 className="text-base sm:text-lg mb-4">a software developer in Canada.</h2>
                    <a href="#projects">
                        <button className="bg-white text-black border border-black mt-8 py-2 px-4 rounded-full font-sansMono hover:bg-gray-100">
                            See my work
                        </button>
                    </a>
                </div>
                <hr className="border-t border-black mt-12"></hr>
                <ProjectTable />
            </main>
            <footer>
                <div className="md:invisible flex items-center justify-center mx-auto h-1/3 mb-6">
                    <a href="https://github.com/jasfoong" target="_blank" rel="noopener noreferrer" className="w-8 h-8">
                        <img src="/github-astatine.png" alt="GitHub" className="w-full h-full" />
                    </a>
                    <a href="https://www.linkedin.com/in/jasmine-foong" target="_blank" rel="noopener noreferrer" className="w-8 h-8">
                        <img src="/linkedin-iconbaandar.png" alt="LinkedIn" className="w-full h-full" />
                    </a>
                    <a href="mailto:jasfoong19@gmail.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8">
                        <img src="/email-iconbaandar.png" alt="Email" className="w-full h-full" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;