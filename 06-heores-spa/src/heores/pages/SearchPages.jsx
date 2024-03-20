import { HeroCard } from "../components/index";

export const SearchPages = () => {
  return (
    <>
      <h1>Search </h1>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Search a hero "
              className="form-control"
              name="searchText "
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">there no results</div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
