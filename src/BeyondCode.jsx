import img1 from './assets/embroidery1.jpg';
import img2 from './assets/embroidery2.jpg';
import img3 from './assets/embroidery3.jpg';

export default function BeyondCode() {
  return (
    <section id="beyond" className="bg-gradient-to-r from-#4B0000 to-[black] text-white px-6 pt-20 pb-4 m-0">
      <h2 className="text-4xl font-semibold text-center mb-12 border-b-2 border-maroon inline-block">Beyond Code</h2>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          When I’m not coding, I’m probably designing, stitching, or bingeing psychological thrillers.
        </p>

        {/* Image Gallery */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <img
            src={img1}
            alt="Embroidery 1"
            className="w-80 h-80 object-cover rounded-lg border border-white/10 shadow-md"
          />
          <img
            src={img2}
            alt="Embroidery 2"
            className="w-80 h-80 object-cover rounded-lg border border-white/10 shadow-md"
          />
          <img
            src={img3}
            alt="Embroidery 3"
            className="w-80 h-80 object-cover rounded-lg border border-white/10 shadow-md"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-black/20 p-6 rounded-lg shadow border border-white/10">
            <h3 className="text-xl font-semibold mb-2">🧵 Embroidery</h3>
            <p className="text-gray-400">
              Stitching patterns from memory and blending colors helps me slow down and breathe. It’s my version of meditation.
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
}
