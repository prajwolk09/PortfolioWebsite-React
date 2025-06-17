import { ArrowRight, GithubIcon } from "lucide-react";

const placeholderImage = "/assets/placeholder.png";

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description:
      "A restaurant website that allows users to view the menu, make reservations, and order food online built using Laravel",
    image: "/projects/project1.png",
    tags: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/prajwolk09/Restaurant-Reservation",
  },
  {
    id: 2,
    title: "Emotion Based Music Recommendation System",
    description:
      "A music recommendation system that suggests songs based on the user's current emotional state using machine learning built with Python",
    image: "/projects/project2.png",
    tags: ["Python", "Tensorflow", "OpenCV", "Face Recognition", "TKinter"],
    github: "https://github.com/prajwolk09/Emotion-Based-Music-Recommendation-System",
  },
  {
    id: 3,
    title: "Movie Website",
    description:
      "A movie website that allows users to search for movies and view details built using React",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "TMDB API", "Appwrite"],
    github: "https://github.com/prajwolk09/MovieApp-React",
  },
];

export const ProjectsSection = () => {
  const githubProfileUrl = "https://github.com/prajwolk09";

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base md:text-lg">
          Here are some of the projects I have worked on.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[400px] flex flex-col"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image || placeholderImage}
                  alt={project.title || "Project image"}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-tag-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.github || "#"}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={20} />
                    <span className="text-sm">View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
            aria-label="Visit my GitHub profile"
          >
            Check my GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};