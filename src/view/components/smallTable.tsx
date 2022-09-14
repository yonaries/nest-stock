import React, { useEffect, useState } from "react";
import { fetchGL } from "../../api/mostGainersRequest";
import { useTheme } from "../../context/ThemeContext";
import { MostGL, StockGL } from "../../model/gainer_losersModel";

type Props = {
    stocks: string;
};

const ShortTable = (props: Props) => {
    const { textPrimary, bgPrimary, bgSecondary, textSecondary } = useTheme();
    const [statData, setStatData] = useState<StockGL[]>([]);
    const [color, setColor] = useState<string>("text-green-500");

    useEffect(() => {
        if (props.stocks === 'gainers') { setColor('text-green-500') }
        if (props.stocks === 'losers') { setColor('text-red-500'); }
        const getData = async () => {
            const result = await fetchGL(props.stocks);
            setStatData(result.data);
            console.log(statData);
        };
        return () => {
            getData();
        };
    }, []);



    return (
        <div
            className={`${textPrimary} h-60 overflow-scroll hidden md:block mr-16 ml-6 rounded-md ${bgPrimary}`}
        >
            <div className={`flex items-center justify-between h-12 ${bgPrimary}`}>
                {props.stocks === "gainers" ? (
                    <p className="font-semibold">Most Gainers</p>
                ) : (
                    <p className="font-semibold">Most Losers</p>
                )}
                <p className={`text-xs ${textSecondary}`}>Aug 13 2023 4:00PM</p>
            </div>
            <table className={`w-64 text-right text-sm`}>
                <thead>
                    <tr className={`${bgSecondary} ${textSecondary} h-8`}>
                        <th className="text-left">Name</th>
                        <th>Price</th>
                        <th className="">Change</th>
                        <th>Chg%</th>
                    </tr>
                </thead>
                <tbody>
                    {statData.map((stock) => (
                        <tr key={stock.symbol} className="h-10 border-t-2">
                            <td className="text-left">{stock.symbol}</td>
                            <td>{stock.price}</td>
                            <td className={color}>{stock.change}</td>
                            <td className={color}>{stock.changesPercentage}</td>
                        </tr>
                    ))}
                    {/* <tr className='h-10 border-t-2'>
                        <td className='text-left'>GOO</td>
                        <td>DDD</td>
                        <td className={color}>12</td>
                        <td className={color}>12</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default ShortTable;
