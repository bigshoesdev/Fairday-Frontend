export const parseQueryParams = (search: string) => {
    const params = new URLSearchParams(search);
    return {
      language: params.get("language") || "",
      jobTitle: params.get("jobTitle") || "",
      category: params.get("category") || "",
      location: params.get("location") || "",
      radius: Number(params.get("radius") || 0),
      sortBy: params.get("sortBy") || "Relevance",
      distance: Number(params.get("distance") || 0),
      salary: Number(params.get("salary") || 0),
      employmentType: params.get("employmentType") || "",
      locationSelect: params.get("locationSelect") || "",
    };
  };