import img1 from "../assets/eventsphere/1.png";
import img2 from "../assets/eventsphere/2.png";
import img3 from "../assets/eventsphere/3.png";

export default function Projects() {
  return (
    <section className="py-24 text-center max-w-5xl mx-auto px-6">

      <h2 className="text-3xl text-cyan-400 mb-10">Event Sphere</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[img1, img2, img3].map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
        ))}
      </div>

      <p className="text-gray-300 mt-8 leading-7">
        A modern event management platform for colleges with QR ticketing,
        dashboards, and role-based login.
      </p>

    </section>
  );
}