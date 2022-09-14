import { MostGL } from './../model/gainer_losersModel';
import axios from "axios";
import { IntraDayType, parseIntraDay } from "../model/intradayModel";

export async function fetchGL(stokes: string) {
    const apiKey = '98aaf779a0e40648be61181ce3c5996f';
    let url: string = ''
    if (stokes === 'gainers') url = `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${apiKey}`;
    if (stokes === 'losers') url = `https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${apiKey}`;

    try {
        const data = await axios.get(url);

        const result: MostGL = {
            data: data.data
        }

        return result
    } catch (error) {
        console.log(error);
        throw new Error(`${error} new error`);
    }
}