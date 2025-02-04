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
    page: Number(params.get("page") || 1),
  };
};

export const generateSearchUrl =(filters,queryParams)=> {
  // Add each filter to the query string if it has a value
  if (filters.language) queryParams.append("language", filters.language);
  if (filters.jobTitle) queryParams.append("jobTitle", filters.jobTitle);
  if (filters.category) queryParams.append("category", filters.category);
  if (filters.location) queryParams.append("location", filters.location);
  if (filters.radius) queryParams.append("radius", filters.radius.toString());
  if (filters.sortBy) queryParams.append("sortBy", filters.sortBy);
  if (filters.distance)
    queryParams.append("distance", filters.distance.toString());
  if (filters.salary) queryParams.append("salary", filters.salary.toString());
  if (filters.employmentType)
    queryParams.append("employmentType", filters.employmentType);
  if (filters.locationSelect)
    queryParams.append("locationSelect", filters.locationSelect);
  if (filters.page)
    queryParams.append("page", filters.page.toString());

  // Construct the full URL with query params
  const currentPath = window.location.pathname;

  // Build the new URL with the current path and updated query parameters
  const newUrl = `${currentPath}?${queryParams.toString()}`;

  return newUrl;
}