import { Filters } from ".";

const JobDistance = ({
  filters,
  onSearchChange,
}: {
  filters: Filters;
  onSearchChange: (newFilters: Partial<typeof filters>) => void;
}) => {
  const handleDistanceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedDistance = event.target.value;

    let distanceValue = 0;
    if (selectedDistance === "within 25 mi") {
      distanceValue = 25;
    } else if (selectedDistance === "within 50 mi") {
      distanceValue = 50;
    } else if (selectedDistance === "within 100 mi") {
      distanceValue = 100;
    }

    onSearchChange({ distance: distanceValue });
  };

  return (
    <div className="mb-3">
      <p className="text-[16px] font-semibold text-gray-900">Distance:</p>
      <select
        className="w-full border font-bold border-gray-300 text-sm rounded-md p-2"
        value={`within ${filters.distance} mi`}
        onChange={handleDistanceChange}
      >
        <option>within 25 mi</option>
        <option>within 50 mi</option>
        <option>within 100 mi</option>
      </select>
    </div>
  );
};

export default JobDistance;
