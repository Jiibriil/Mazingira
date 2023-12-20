export default defineEventHandler(async (event) => {
  return {
    services: [
      {
        image: "/images/img3.webp",
        title: "Community Cleanups",
        description:
          "Join hands with our community for large-scale clean-up drives that revitalize streets and neighborhoods. We tackle accumulated waste, unclog drains, and leave behind a cleaner, healthier environment.",
      },
      {
        image: "/images/img2.webp",
        title: "Tree Planting",
        description:
          "We plant trees in public spaces and slums across Nairobi. We also provide training on tree care and maintenance to ensure the trees grow to maturity.",
      },
      {
        image: "/images/img4.webp",
        title: "Community Sensitization Programs",
        description:
          "Educational initiatives to raise awareness about environmental issues. Workshops and campaigns to promote sustainable practices within communities.",
      },
      {
        image: "/images/bg-bunner-2.webp",
        title: "Waste Management Solutions",
        description:
          "We provide waste management solutions to less privileged communities across Nairobi. We install waste bins, provide waste collection services, and offer training on proper waste disposal practices.",
      },
      {
        Image: "/images/img2.webp",
        title: "Sewage Unclogging",
        description:
          "Through our Volunteers and Partners, we unclog sewage systems and drains across Nairobi. We also provide training on proper waste disposal practices to prevent future blockages.",
      },
    ],

    projects: [
      {
        image: "path/to/mukuru-project-image.jpg",
        title: "Mukuru kwa Reuben Transformation",
        description:
          "Transformed Mukuru kwa Reuben through a mega cleanup, sewage unclogging, and the installation of waste bins. Engaged with the community through sensitization programs, fostering a sense of environmental responsibility.",
      },
      {
        image: "path/to/pipeline-project-image.jpg",
        title: "Pipeline Area Revitalization",
        description:
          "Revitalized the Pipeline area with a large-scale cleanup, community sensitization, and the strategic placement of garbage bins. Empowered the community to actively participate in maintaining a cleaner environment.",
      },
      {
        image: "path/to/kariobangi-project-image.jpg",
        title: "Kariobangi North Cleanup",
        description:
          "Addressed the persistent issue of roadside garbage in Kariobangi North. Conducted extensive cleanup campaigns, community education initiatives, and implemented waste disposal infrastructure, eliminating long-standing dumping practices.",
      },
    ],
  };
});
