import { FaGithub } from 'react-icons/fa';

export default function ExperienceProjects() {
  return (
    <section id="experience" className="min-h-screen bg-gradient-to-r from-black to-[#4B0000] text-white px-6 py-20">
      <h2 className="text-4xl font-semibold text-center mb-12 border-b-2 border-maroon inline-block">Experience & Projects</h2>

      {/* Internship */}
      <div className="bg-gradient-to-r from-[#4B0000] to-black p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-12 border border-white/10">
        <h3 className="text-2xl font-bold">Web Developer Intern</h3>
        <p className="text-sm text-gray-300 mt-1 italic">Varlyq Technologies · Summer 2024</p>
        <p className="text-gray-200 mt-4">
          Developed a Django-based CRM system for a client, enhancing customer management processes.
          Implemented features like user authentication, data visualization, and real-time notifications using Django Channels.
          Collaborated with a team of developers to ensure code quality and meet project deadlines.
        </p>
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        <div className="bg-black/20 backdrop-blur p-5 border border-white/10 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">Flollette</h4>
            <a href="https://github.com/NikitaSharmaaa/flollette"  title="View on GitHub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-gray-300 italic">Menstrual Wellness Tracker</p>
          <p className="text-gray-400 mt-2">
            A .NET app using C# that helps users track menstrual cycles, symptoms, and moods.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur p-5 border border-white/10 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">Ecosphere</h4>
            <a href="https://github.com/NikitaSharmaaa/ecosphere" title="View on GitHub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-400 mt-2">
            An Android app featuring community clubs, resource calculators, eco-store locator, and chatbot support promoting sustainable living.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur p-5 border border-white/10 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">DFS File Explorer</h4>
            <a href="https://github.com/NikitaSharmaaa/dfs-file-explorer" title="View on GitHub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-400 mt-2">
            A simple Python file explorer using the DFS algorithm.
          </p>
        </div>

        <div className="bg-black/20 backdrop-blur p-5 border border-white/10 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">Personal Portfolio</h4>
            <a href="https://github.com/NikitaSharmaaa/portfolio" title="View on GitHub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-400 mt-2">
            A responsive personal portfolio built using React and Tailwind CSS.
          </p>
        </div>

      </div>
    </section>
  );
}
