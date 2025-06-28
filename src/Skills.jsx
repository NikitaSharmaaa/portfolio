export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-r from-#4B0000 to-[black] text-white px-6 pt-20 pb-4 m-0">
  <h2 className="text-4xl font-semibold text-center mb-8 border-b-2 border-maroon inline-block">Skills</h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="bg-black/20 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <p className="text-gray-400">C++ · Python · Java · JavaScript</p>
        </div>

        <div className="bg-black/20 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-400">HTML · CSS · React · Tailwind · Node.js · Django</p>
        </div>

        <div className="bg-black/20 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Mobile & UI</h3>
          <p className="text-gray-400">Android Studio · Kotlin · .NET · Flutter · Dart · Figma</p>
        </div>

        <div className="bg-black/20 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <p className="text-gray-400">VSCode · Git · GitHub · Postman</p>
        </div>

        <div className="bg-black/20 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Currently Exploring</h3>
          <p className="text-gray-400">Cloud Computing · Docker · Kubernetes · AI · ML · Cybersecurity</p>
        </div>

        <div className="bg-black/20 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
          <p className="text-gray-400">Adaptability · Communication · Detail-Oriented</p>
        </div>
      </div>
    </section>
  );
}
