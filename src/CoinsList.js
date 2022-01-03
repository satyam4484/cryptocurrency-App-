const CoinsList = (props) => {
  return (
    <tr className="table-secondary text-center">
      <th scope="mx-auto">{props.coin.rank}</th>
      <td className="d-flex">
          <img src={props.coin.icon} width="45"/>
          <a className=" mx-auto my-auto text-dark fw-bold" target="_blank" href={props.coin.websiteUrl}>{props.coin.name}</a>
      </td>
      <td className="fw-bold text-warning fs-5">{props.coin.symbol}</td>
      <td>{props.coin.marketCap}</td>
      <td><span>&euro; </span>{props.coin.price}</td>
      <td>{props.coin.availableSupply}</td>
      <td>{props.coin.totalSupply}</td>
    </tr>
  );
};

export default CoinsList;
