import React from "react";

function Content() {
  return (

    <div className="container mx-auto min-h-[80vh]">
      <section id="about" className="mb-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I am a passionate web developer with a love for creating dynamic and
          responsive web applications. My journey in web development started
          with a fascination for how websites work and has evolved into a
          career focused on building user-friendly interfaces.
        </p>
      </section>

      <section id="projects" className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="list-disc pl-5">
          <li>Project One: A responsive portfolio website.</li>
          <li>Project Two: An e-commerce application.</li>
          <li>Project Three: A personal blog platform.</li>
        </ul>
      </section>

      <section id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">
            Feel free to reach out via email at{" "}
            <a href="mailto:ricardogarcia@example.com" className="text-blue-600 underline">
                ricardo@ricardogarcia.uk
            </a>
            .
        </p>
        </section>
    </div>
  );
}
export default Content;