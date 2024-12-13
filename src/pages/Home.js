import { useState, useEffect } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import countries from "../data.json";

export default function Home() {
  const [filter, setFilter] = useState({ name: "", region: "" });
  const [newCountries, setNewCountries] = useState(countries);

  useEffect(() => {
    const filteredCountries = countries.filter((item) => {
      const matchesName = item.name
        .toLowerCase()
        .includes(filter.name.toLowerCase());
      const matchesRegion = filter.region
        ? item.region.toLowerCase() === filter.region.toLowerCase()
        : true;
      return matchesName && matchesRegion;
    });
    setNewCountries(filteredCountries);
  }, [filter]);

  const handleFilterChange = (updatedFilter) => {
    setFilter((prev) => ({ ...prev, ...updatedFilter }));
  };

  return (
    <main className="main">
      <div className="container">
        <SearchBar search={filter} onFilterChange={handleFilterChange} />
        <Card data={newCountries} />
      </div>
    </main>
  );
}
