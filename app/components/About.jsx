import Image from 'next/image';

export default function About() {
  const skills = ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'TensorFlow'];

  return (
    <section id="about" className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <p className="text-lg mb-4">
            I'm a passionate Web & AI Developer with a knack for building innovative and user-friendly applications. My focus is on creating seamless experiences with modern technologies.
          </p>
          <h3 className="text-xl font-semibold mb-2">My Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}