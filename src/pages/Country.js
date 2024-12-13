import { useParams, Link } from "react-router-dom";
import countries from "../data.json";

export default function Country() {
  let { code } = useParams();

  const thisCountry = countries.find(
    (item) => item.alpha2Code.toLowerCase() === code,
  );

  if (!thisCountry) {
    return <p>Country not found.</p>;
  }

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    flags,
    topLevelDomain,
    currencies,
    languages: countryLanguages,
    borders,
  } = thisCountry;

  const languages = countryLanguages?.map((el) => el.name) || [];
  const neighbours =
    borders?.map((border) =>
      countries.find((item) => item.alpha3Code === border),
    ) || [];

  return (
    <main className="main country">
      <div className="container">
        <div className="row align-center">
          <div className="col-12">
            <Link to="/" className="btn mt-lg mb-lg">
              &larr; Back
            </Link>
          </div>
          <div className="col-12 col-lg-auto">
            <img
              src={flags?.svg || "default-flag.png"}
              alt={`${name} flag`}
              className="country-flag"
            />
          </div>
          <div className="col-12 col-lg">
            <div className="country-info">
              <h2 className="country-name">{name}</h2>
              <div className="row space-between">
                <div className="col-6">
                  <p>
                    <span className="semibold">Native Name: </span>
                    {nativeName}
                  </p>
                  <p>
                    <span className="semibold">Population: </span>
                    {population.toLocaleString("en")}
                  </p>
                  <p>
                    <span className="semibold">Region: </span>
                    {region}
                  </p>
                  <p>
                    <span className="semibold">Sub Region: </span>
                    {subregion}
                  </p>
                  {capital && (
                    <p>
                      <span className="semibold">Capital: </span>
                      {capital}
                    </p>
                  )}
                </div>
                <div className="col-6">
                  <p>
                    <span className="semibold">Top Level Domain: </span>
                    {topLevelDomain}
                  </p>
                  {currencies && (
                    <p>
                      <span className="semibold">Currencies: </span>
                      {currencies[0]?.name || "N/A"}
                    </p>
                  )}
                  <p>
                    <span className="semibold">Languages:</span>{" "}
                    {languages.join(", ")}
                  </p>
                </div>
              </div>
              {neighbours.length > 0 && (
                <p className="country-borders">
                  <span className="btn-group">
                    <span className="semibold">Border Countries:</span>
                    {neighbours.map((item) => (
                      <Link
                        key={item.alpha2Code}
                        to={`/country/${item.alpha2Code.toLowerCase()}`}
                        className="btn-small"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
