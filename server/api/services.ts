export default defineEventHandler(async (event) => {
  return {
    {
        "services": [
          {
            "image": "path/to/cleanup-image.jpg",
            "title": "Community Cleanups",
            "description": "Mega cleanups to enhance the overall cleanliness of neighborhoods. Specialized projects targeting specific areas with environmental challenges."
          },
          {
            "image": "path/to/sewage-image.jpg",
            "title": "Sewage Unclogging",
            "description": "Expertise in addressing sewage blockages for improved sanitation."
          },
          {
            "image": "path/to/sensitization-image.jpg",
            "title": "Community Sensitization Programs",
            "description": "Educational initiatives to raise awareness about environmental issues. Workshops and campaigns to promote sustainable practices within communities."
          },
          {
            "image": "path/to/waste-management-image.jpg",
            "title": "Waste Management Solutions",
            "description": "Installation of strategically placed garbage bins to discourage improper disposal. Implementation of waste disposal infrastructure for long-term impact."
          }
        ]
      }
      
  };
});
