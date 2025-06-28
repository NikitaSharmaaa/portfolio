export default function Certifications() {
  const certs = [
    {
      title: "IBM Full Stack Software Developer",
      org: "IBM",
      year: "2025",
      Credential: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/GHXUP03DVOQ4"
    },
    {
      title: "C++ Programming - Beginner to Advanced - Deep dive in C++",
      org: "Udemy",
      year: "2025",
    },
    {
      title: "TechA Transition from kotlin java developer to Android Developer",
      org: "Infosys Springboard",
      year: "2024",
    },
    {
      title: "Data Structures and Algorithms Python",
      org: "Udemy",
      year: "2025",
    },
  ];

  return (
    <section id="certifications" className="bg-gradient-to-r from-#4B0000 to-[black] text-white px-6 pt-20 pb-4 m-0">
      <h2 className="text-4xl font-semibold text-center mb-12 border-b-2 border-maroon inline-block">Certifications</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, idx) => (
          <div
            key={idx}
            className="bg-black p-6 rounded-xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold">{cert.title}</h3>
            <p className="text-sm text-gray-300">{cert.org}</p>
            <p className="text-xs text-gray-500 mt-2">🗓 {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
