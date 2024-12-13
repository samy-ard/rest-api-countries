export default function Card(countries) {
  return (
    <>
      <div className="row card-group">
        {countries.data.map((item) => {
          return (
            <>
              <a
                key={item.alpha3Code}
                href={"/country/" + item.alpha2Code.toLocaleLowerCase()}
                className="col-auto px-0 mx-0 col-card"
              >
                <article className="card">
                  <div className="card-header">
                    <img
                      src={item.flags.png}
                      className="card-flag"
                      alt={item.name}
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <div className="card-info">
                      <p>
                        <span className="semibold">Population:</span>{" "}
                        {item.population.toLocaleString("en")}
                      </p>
                      <p>
                        <span className="semibold">Region:</span> {item.region}
                      </p>
                      <p>
                        <span className="semibold">Capital:</span>{" "}
                        {item.capital}
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}
