// import './App.css';
import DaoItem from "./DaoItem";
import { DATA } from "../data/dao";

function DaoTable() {
const daoList = DATA.map((dao) => 
    <DaoItem daoId={dao.id} name={dao.name} treasuryAddress={dao.treasuryAddress}></DaoItem>
);

  return <div className="dao-table">
      {daoList}
  </div>;
}

export default DaoTable;
