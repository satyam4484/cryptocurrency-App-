import { useState, useEffect } from "react";
import CoinsList from "./CoinsList";
import "./App.css";
import { Fragment } from "react/cjs/react.production.min";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setCoins(response.coins);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(coins);
  const FilterCoins = coins.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center mt-2 text-decoration-underline mb-3">
          CryptoCurrency
        </h1>
        <div className="mb-3">
          <input
            className="form-control me-sm-2"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here"
          />
        </div>
        <div
          className="row mt-3 overflow-auto"
          style={{ maxHeight: "80vh", border: "2px solid black" }}
        >
          <table className="table table-hover text-center">
            <thead>
              <tr className="table-dark">
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Symbol</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Price</th>
                <th scope="col">Available Supply</th>
                <th scope="col">Volume</th>
              </tr>
            </thead>
            <tbody>
              {FilterCoins.length > 0 &&
                FilterCoins.map((coin) => {
                  return <CoinsList key={coin.id} coin={coin} />;
                })}
            </tbody>
          </table>
          {FilterCoins.length === 0 && (
            <p className="text-center text-danger fs-3 fw-bold">
              No items to show
            </p>
          )}
        </div>
      </div>
      
      <footer>
        <p >&copy; 2022 S@tyam Singh</p>
      </footer>
    </Fragment>
  );
};

export default App;
