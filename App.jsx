import React from "react";
import { CountryProvider } from "./context/CountryContext";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  return (
    <CountryProvider>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">World University</h1>
        <CountryList />
        <CountryDetail />
      </div>
    </CountryProvider>
  );
};

export default App;
