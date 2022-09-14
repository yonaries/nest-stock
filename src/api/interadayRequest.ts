import axios from "axios";
import { IntraDayType, parseIntraDay } from "../model/intradayModel";

export async function fetchIntraDay(symbol: string) {
    const apiKey = '98aaf779a0e40648be61181ce3c5996f';
    const url = `https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?limit=120&apikey=${apiKey}`;
    try {
        const data = await axios.get(url);

        const result: IntraDayType = {
            SYMBOL: 'AAPL',
            Series: data.data
        }

        return parseIntraDay(result)
    } catch (error) {
        console.log(error);
        throw new Error(`${error} new error`);
    }
}