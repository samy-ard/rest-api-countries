import { useState } from "react";

export default function SearchBar({ search, onFilterChange }) {
  const [searchInput, setSearchInput] = useState(search.name);
  const [regionInput, setRegionInput] = useState(search.region);

  const regions = [
    { value: "africa", label: "Africa" },
    { value: "americas", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onFilterChange({ name: value });
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    setRegionInput(value);
    onFilterChange({ region: value });
  };

  return (
    <form className="search-form">
      <div className="row space-between align-center">
        <div className="col-12 col-lg-auto">
          <div className="form-group">
            <input
              type="search"
              className="form-field form-search"
              placeholder="Search for a country..."
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="col-auto">
          <div className="form-group">
            <select
              className="form-field form-select"
              value={regionInput}
              onChange={handleRegionChange}
            >
              <option value="">Filter by Region</option>
              {regions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}
