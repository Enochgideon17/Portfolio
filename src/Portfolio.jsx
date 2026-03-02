import { useEffect, useState } from "react";

function Portfolio() {
  const roles = ["AI Engineer", "ML Developer", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-b from-zinc-900 to-black">
        <h1 className="text-5xl md:text-6xl font-bold">
          Enoch G
        </h1>

        <p className="mt-6 text-emerald-400 text-2xl h-8">
          {text}
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:enochgideon17@gmail.com"
            className="bg-emerald-500 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/Enochgideon17"
            target="_blank"
            rel="noreferrer"
            className="border border-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-500 hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/enoch__07/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="border border-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-500 hover:text-black transition"
          >
            Instagram
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">

        {/* ABOUT */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-zinc-400 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            I’m an AI & ML enthusiast passionate about building intelligent
            systems that solve real-world problems. I focus on fraud detection,
            scam intelligence systems, and scalable full-stack applications.
            Strong foundation in DSA, system design, and clean architecture.
          </p>
        </section>

        {/* JOURNEY */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-16">
            My Journey
          </h2>

          <div className="relative max-w-3xl mx-auto">

            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-500 h-full"></div>

            {/* School */}
            <div className="relative mb-16 flex justify-start">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-zinc-900 p-6 rounded-xl border border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105 transition">
                  <h3 className="font-semibold text-lg">
                    Schooling (Till 2021)
                  </h3>
                  <p className="text-zinc-400 mt-2">
                    Completed 10th at St. Paul High School.
                    Developed communication skills and leadership qualities.
                  </p>
                </div>
              </div>
            </div>

            {/* PU */}
            <div className="relative mb-16 flex justify-end">
              <div className="w-1/2 pl-8">
                <div className="bg-zinc-900 p-6 rounded-xl border border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105 transition">
                  <h3 className="font-semibold text-lg">
                    Pre-University (2021 – 2023)
                  </h3>
                  <p className="text-zinc-400 mt-2">
                    Studied at St. Joseph Indian Composite PU College.
                    Strengthened analytical thinking and academic foundations.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering */}
            <div className="relative flex justify-start">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-zinc-900 p-6 rounded-xl border border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105 transition">
                  <h3 className="font-semibold text-lg">
                    Engineering (2023 – Present)
                  </h3>
                  <p className="text-zinc-400 mt-2">
                    Pursuing Engineering at Cambridge Institute of Technology.
                    Focused on AI, Machine Learning, Full Stack Development,
                    and system design.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python",
              "Java",
              "JavaScript",
              "React",
              "FastAPI",
              "MongoDB",
              "SQL",
              "Machine Learning",
              "TensorFlow",
              "Git/GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-zinc-800 px-5 py-2 rounded-full border border-emerald-500 hover:bg-emerald-500 hover:text-black transition cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Fraud Detection */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105 transition">
              <h3 className="text-xl font-semibold">
                Credit Card Fraud Detection
              </h3>
              <p className="text-zinc-400 mt-3">
                Built a machine learning classification model to detect
                fraudulent transactions using feature engineering,
                scaling, and precision-recall optimization.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm">
                  Python
                </span>
                <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm">
                  Scikit-Learn
                </span>
                <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm">
                  Pandas
                </span>
              </div>
            </div>

            {/* Fake Job Detector */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105 transition">
              <h3 className="text-xl font-semibold">
                Fake Job Detection Platform
              </h3>
              <p className="text-zinc-400 mt-3">
                Developed an NLP-based scam detection system using TF-IDF
                and Logistic Regression. Deployed with Streamlit for
                real-time job posting analysis.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm">
                  NLP
                </span>
                <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm">
                  Streamlit
                </span>
                <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm">
                  ML
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Impactful
          </h2>
          <p className="text-zinc-400 text-lg">
            Bangalore • 7899350173 • enochgideon17@gmail.com
          </p>
        </section>

      </div>
    </div>
  );
}

export default Portfolio;