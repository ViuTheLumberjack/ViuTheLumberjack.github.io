export const siteConfig = {
  name: "Silviu Leonard Vatamanelu",
  title: "PhD Student @ University of Florence | Researcher in Computer Science | Software Engineer",
  description: "Portfolio website of Silviu Leonard Vatamanelu",
  accentColor: "#1d4ed8",
  social: {
    email: "silviuleonard.vatamanelu@unifi.it",
    linkedin: "https://www.linkedin.com/in/silviu-leonard-vatamanelu-8b793a34b",
    github: "https://github.com/ViuTheLumberjack",
  },
  aboutMe:
    "I am a passionate researcher and software engineer with a strong background in computer science. I have a deep interest in artificial intelligence and its applications in real-world scenarios. My research focuses on autonomous driving systems and AI for computer vision.",
  skills: ["Python", "PyTorch", 'Java', 'C++', 'C', "C#", "Docker"],
  projects: [
    {
      name: "Boids Simulation",
      description:
        "A simulation of flocking behavior using the Boids algorithm. The project focuses on HPC and parallel computing, utilizing C++ and OpenMP for efficient performance. Also compares the performance of different parallelization techniques and algorithms such as KD-trees.",
      link: "https://github.com/ViuTheLumberjack/boids",
      skills: ["HPC", "C++", "OpenMP", "Parallel Computing"],
    },
    {
      name: "Mathematical Morphological Image Processing",
      description:
        "Implementation of various mathematical morphological image processing techniques, including dilation, erosion, opening, and closing. The project focuses on CUDA programming and GPU acceleration for efficient image processing. Different cache optimization techniques are also explored to improve performance.",
      link: "https://github.com/ViuTheLumberjack/mmip_with_cuda",
      skills: ["HPC", "C++", "CUDA", "Parallel Computing"],
    },
    {
      name: "Perlin Noise Simulation",
      description:
        "A small framework for generating Perlin noise in 2D and 3D. The project focuses on HPC and parallel computing, utilizing C++ and Intel OneAPI for efficient performance. Also compares the performance of different parallelization techniques and algorithms.",
      link: "https://github.com/ViuTheLumberjack/perlin",
      skills: ["HPC", "C++", "Intel OneAPI", "Parallel Computing"],
    },
  ],
  experience: [
    {
      company: "G.F. Europa",
      title: "Full-Stack Software Developer",
      dateRange: "Sep 2022 - Present",
      bullets: [
        "Led development of eCommerce platform, simplifying online sales and enhancing user experience.",
        "Implemented robust backend services, ensuring seamless data management and high availability.",
        "Maintained and optimized existing codebase, improving performance and scalability.",
      ],
    },
    {
      company: "University of Florence",
      title: "Pre-Doctoral Researcher",
      dateRange: "March 2026 - Oct 2026",
      bullets: [
        "Continued research in autonomous driving systems.",
        "Prediction of delayed features in autonomous driving systems using deep learning techniques.",
      ],
    },
  ],
  education: [
    {
      school: "University of Florence",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "Sep 2020 - Sep 2023",
      achievements: [
        "Graduated with 108/110",
      ],
    },
    {
      school: "University of Florence",
      degree: "Master of Science in Computer Engineering",
      dateRange: "Oct 2023 - Feb 2026",
      achievements: [
        "Graduated with 110/110 cum laude",
      ],
    },
    {
      school: "University of Florence",
      degree: "Phd in Computer Engineering",
      dateRange: "Nov 2026 - Present",
      achievements: [
        "Currently working on Autonomous Driving Systems and AI for Computer Vision",
      ],
    },
  ],
};
