import React, { createContext, useState } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { name: "Swiss", flag: "🇨🇭", capital: "Bern", currency: "CHF", population: "8.6 juta" },
    { name: "Italia", flag: "🇮🇹", capital: "Rome", currency: "EUR", population: "59.1 juta" },
    { name: "Jerman", flag: "🇩🇪", capital: "Berlin", currency: "EUR", population: "83.2 juta" },
    { name: "Canada", flag: "🇨🇦", capital: "Ottawa", currency: "CAD", population: "40.1 juta" }
  ];

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry, countries }}>
      {children}
    </CountryContext.Provider>
  );
};
