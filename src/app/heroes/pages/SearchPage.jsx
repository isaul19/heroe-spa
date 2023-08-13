import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const query = queryString.parse(useLocation().search).q;
  const heroes = getHeroesByName(query);
  const { formState, onInputChange, onResetForm } = useForm({ searchText: query });

  const onSearch = (e) => {
    e.preventDefault();
    if (!formState.searchText.trim()) return;

    const heroName = formState.searchText.toLowerCase();
    navigate(`?q=${heroName}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5 mt-3">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearch}>
            <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>Hero: </span>
              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={formState.searchText}
                onChange={onInputChange}
              />
            </label>

            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7 mt-3">
          <h4>Results</h4>
          <hr />
          {/* Initial Alert */}
          {!query && (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a Heroes
            </div>
          )}

          {/* Not Hero found */}
          {!heroes.length && query && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              Heroe not found
            </div>
          )}

          {/* View Heroes */}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
