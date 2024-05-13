import { countries } from "../../data/countries.json";
import Country from "../Country/Country";

export default function ListCountries() {
  console.log(countries);

  return (
    <>
      <div className="countryCards">
        {countries.map((country) => (
          <Country key={country.id} country={country} />
        ))}
      </div>
    </>
  );
}
