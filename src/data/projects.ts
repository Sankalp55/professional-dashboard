export type Project = {
  title: string;
  description: string;
  tech: string[];
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "AETHER – Microblogging Platform",
    description:
      "A full-stack microblogging platform where users can register, log in, and create, edit, or delete posts.",
    tech: ["Django", "HTML", "CSS", "Bootstrap 5", "SQLite", "Git"],
    images: [
      "/project1.png" , "/project1-2.png"
    ]
  },
  {
    title: "Women's Safety Analytics",
    description:
      "Built a geospatial women’s safety analytics system that uses real-time and historical crime data to predict high-risk areas and support proactive safety planning.",
    tech: ["Python", "Pandas", "NumPy", "OpenCV", "Data Visualization"],
    images: [
      "/project2.png" , "/project2-2.png"
    ],
  },
];
