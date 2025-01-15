import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import Grid from "./components/Grid/Grid";
import "./App.css";

interface DataItem {
  href: string;
  data: Array<{
    title: string;
    description: string;
    description_508: string;
    media_type: string;
  }>;
  links: Array<{
    href: string;
  }>;
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSearch = async (query: string) => {
    setLoading(true);
    setSearchQuery(query);
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}`
      );
      setData(response.data.collection.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleSort = (field: keyof DataItem["data"][0]) => {
    const sortedData = [...data].sort((a, b) => {
      const nameA = a.data[0][field].toUpperCase();
      const nameB = b.data[0][field].toUpperCase();
      if (sortOrder === "asc") {
        return nameA > nameB ? 1 : -1;
      } else {
        return nameA < nameB ? 1 : -1;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <main>
        <Grid data={data} loading={loading} onSort={handleSort} />
      </main>
    </div>
  );
};

export default App;
