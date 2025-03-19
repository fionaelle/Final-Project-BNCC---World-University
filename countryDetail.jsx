import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const CountryDetail = () => {
  const { selectedCountry } = useContext(CountryContext);

  return (
    <div className="p-4 bg-blue-200 rounded-lg">
      {selectedCountry ? (
        <>
          <h2 className="text-xl font-bold">Detail Negara</h2>
          <p>Nama: {selectedCountry.name}</p>
          <p>Bendera: {selectedCountry.flag}</p>
          <p>Ibukota: {selectedCountry.capital}</p>
          <p>Mata Uang: {selectedCountry.currency}</p>
          <p>Populasi: {selectedCountry.population}</p>
        </>
      ) : (
        <p>Pilih negara untuk melihat detail.</p>
      )}
    </div>
  );
};

export default CountryDetail;

