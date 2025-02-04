import type React from "react"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "https://via.placeholder.com/300x200",
  },
]

const Projects: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

