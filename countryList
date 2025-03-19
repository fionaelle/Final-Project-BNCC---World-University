import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const CountryList = () => {
  const { countries, setSelectedCountry } = useContext(CountryContext);

  return (
    <div className="flex gap-4">
      {countries.map((country, index) => (
        <button
          key={index}
          className="p-2 border rounded-lg hover:bg-gray-200"
          onClick={() => setSelectedCountry(country)}
        >
          {country.flag} {country.name}
        </button>
      ))}
    </div>
  );
};

export default CountryList;
