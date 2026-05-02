import img1 from "../assets/eventsphere/1.png";
import img2 from "../assets/eventsphere/2.png";
import img3 from "../assets/eventsphere/3.png";

// Accident (4–9)
import acc1 from "../assets/accident/4.png";
import acc2 from "../assets/accident/5.png";
import acc3 from "../assets/accident/6.png";
import acc4 from "../assets/accident/7.png";
import acc5 from "../assets/accident/8.png";
import acc6 from "../assets/accident/9.png";

// Bank (10–12)
import bank1 from "../assets/bank/10.png";
import bank2 from "../assets/bank/11.png";
import bank3 from "../assets/bank/12.png";

// Crowd (13–15)
import crowd1 from "../assets/crowd/13.png";
import crowd2 from "../assets/crowd/14.png";
import crowd3 from "../assets/crowd/15.png";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#0b1727] text-white px-6 py-20">

      <h1 className="text-4xl text-cyan-400 text-center mb-16">
        My Projects
      </h1>

      {/* ================= CAMPUS HIVE ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl text-cyan-300 mb-4">
          CampusHive (Upcoming)
        </h2>

        <p className="text-gray-300 leading-7">
          CampusHive is a cloud-based campus management platform designed to
          streamline complaint handling, lost & found services, and student
          engagement. It provides a centralized system where students can report
          issues, track progress, and interact through discussions. The system
          also uses machine learning to prioritize complaints based on urgency,
          improving efficiency and transparency.
        </p>
      </div>

      {/* ================= EVENT SPHERE ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl text-cyan-300 mb-6">
          Event Sphere
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[img1, img2, img3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="event"
              className="rounded-xl shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>

        <p className="text-gray-300 mt-6">
          A modern event management system for colleges featuring QR-based
          ticketing, dashboards, and role-based authentication.
        </p>
      </div>

      {/* ================= ACCIDENT ML ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl text-cyan-300 mb-6">
          Accident Severity Prediction (ML)
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[acc1, acc2, acc3, acc4, acc5, acc6].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="accident"
              className="rounded-xl shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>

        <p className="text-gray-300 mt-6">
          A machine learning system that predicts accident severity based on
          weather, road conditions, and traffic features. It compares models
          like Random Forest and Logistic Regression with visual insights and
          accuracy reports.
        </p>
      </div>

      {/* ================= BANK SYSTEM ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl text-cyan-300 mb-6">
          Bank Account Management System
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[bank1, bank2, bank3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="bank"
              className="rounded-xl shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>

        <p className="text-gray-300 mt-6">
          A desktop-based banking system that supports deposits, withdrawals,
          transaction history tracking, and account management with a simple UI.
        </p>
      </div>

      {/* ================= CROWD TRACKER ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl text-cyan-300 mb-6">
          Real-Time Crowd Density Tracker
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[crowd1, crowd2, crowd3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="crowd"
              className="rounded-xl shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>

        <p className="text-gray-300 mt-6">
          A real-time crowd monitoring system that calculates crowd density,
          tracks user location, and predicts overcrowding probability using
          geospatial data — useful for smart city and safety applications.
        </p>
      </div>

    </section>
  );
}