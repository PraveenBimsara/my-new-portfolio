import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Food Delivering Web App",
    description:
      "Through this project, I built a robust application that offers a smooth and engaging user experience, leveraging the power of React JS to create a responsive and interactive platform.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "Typescript",
      "Tailwind",
      "NodeJS",
      "MongoDB",
      "Express.js",
    ],
    link: "#",
    github: "https://github.com/PraveenBimsara/food-cabin-app",
  },
  {
    title: "Movie Web App",
    description:
      "Developed a feature-rich movie clone app that allows users to discover, organize, and stream movies seamlessly.",
    image: "/projects/project2.png",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "https://github.com/PraveenBimsara/movie-x-app",
  },
  {
    title: "SD Tours & Travel",
    description:
      "Developed SD Tours & Travel, a full-stack MERN travel booking system that allows users to browse tours, make bookings, and manage reservations through a seamless and responsive web application.",
    image: "/projects/project3.png",
    tags: [
      "React",
      "Typescript",
      "Tailwind",
      "NodeJS",
      "MongoDB",
      "Express.js",
    ],
    link: "https://sdtoursandtravel.com/",
    github: "https://github.com/PraveenBimsara/sd-tours-and-travels-frontend",
  },
  {
    title: "Gym Web App",
    description:
      "A dynamic gym website featuring seamless navigation, interactive class scheduling, and responsive design.",
    image: "/projects/project4.jpg",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "https://github.com/PraveenBimsara/gym-app",
  },
];

export const Projects = () => {
  return (
    <>
      <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}
                make an impact.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <AnimatedBorderButton>
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Professional Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-secondary-foreground">
              Real-world systems I’ve
              <span className="font-serif italic font-normal text-white">
                {" "}
                worked on.
              </span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Experience gained during my career at Victory Information
              (Pvt) Ltd.
            </p>
          </div>

          {/* Experience Card */}
          <div className="max-w-4xl mx-auto glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Associate Software Engineer – Victory Information (Pvt) Ltd
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Worked on enterprise-level HRIS and fintech-related systems
              including
              <span className="text-foreground font-medium">
                {" "}
                PeopleHub HRIS{" "}
              </span>
              and
              <span className="text-foreground font-medium">
                {" "}
                Hemas Meal Token System
              </span>
              . Contributed to UI development, feature implementation, and
              system enhancements in production-grade applications used in real
              business environments.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                "React",
                "TypeScript",
                ".NET",
                "Azure",
                "UI Development",
                "Team Collaboration",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
