// import './App.css';
import React, { useState, useEffect } from "react";
import { getTotalTokenBalancesForAddress } from "../api/APIUtils";


const DaoItem = (props) => {
    const [balances, setBalances] = useState(0);
    const [balances24h, setBalances24h] = useState(0);

    useEffect(() => {
        console.log(props.daoId);

        const getBalances = async () => {
            let res = await getTotalTokenBalancesForAddress(
                props.treasuryAddress
            );

            console.log('res', res);

            setBalances(res.balances);
            setBalances24h(res.balances24h);
        };

        getBalances();
    });

    return (
        <div>
            <b>{props.name}</b> balances :  {balances} $ 24h balances : {balances24h}
        </div>
    );
};

export default DaoItem;
