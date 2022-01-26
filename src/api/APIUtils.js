import axios from "axios";

const BASE_URL = "https://api.covalenthq.com/v1/1";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getTokenBalancesForAddress = async (address) => {
    try {
        let res = await axios.get(
            `${BASE_URL}/address/${address}/balances_v2/`,
            {
                params: {
                    key: API_KEY,
                },
            }
        );

        return res.data;
    } catch (err) {
        return {};
    }
};

export const getTotalTokenBalancesForAddress = async (address) => {
    let balances = await getTokenBalancesForAddress(address);
    
    let sum = 0;
    let sum24h = 0;

    for (var i = 0; i < balances.data.items.length; i++) {
        console.log(balances.data.items[0]);
        sum += balances.data.items[i].quote;
        sum24h += balances.data.items[i].quote_24h;
        
    }

    let res = {
        balances : sum,
        balances24h : sum24h
    };

    return res;
};
