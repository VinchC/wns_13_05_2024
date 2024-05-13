const Country = ({ country }) => {
  return (
    <>
      <section className="countryCard">
        <h1>{country.name}</h1>
        <p>{country.emoji}</p>
      </section>
    </>
  );
};

export default Country;
