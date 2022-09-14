import { useEffect, useState } from "react";
import { fetchBulkIntraDay } from "../../api/fetchIntraDayBulk";
import { StatDataType } from "../../model/statDataModel";
import Card from "./card";
import { useHorizontalScroll } from "./horizontalScroll";
import CardSkeleton from "./loadingSkeleton";

type Props = {};

const Trending = (props: Props) => {
    const scrollRef = useHorizontalScroll();
    const symbols = [
        "AAPL",
        "EVEX",
        "PYPL",
        "NVDA",
        "META",
        "NFLX",
        "AMZN",
        "INTC",
    ];
    const [stocksData, setStocksData] = useState<StatDataType[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const getData = async (symbol: string) => {
            const data = await fetchBulkIntraDay(symbol);
            setStocksData((stocksData) => [...stocksData, data]);
            setIsLoaded(true);
        };
        return () => {
            symbols.map((symbol) => getData(symbol));
        };
    }, []);

    return (
        <div ref={scrollRef as any} className="flex overflow-x-scroll">
            {isLoaded ? (
                stocksData.map((data) => (
                    <Card key={data.series[0].name} statData={data} />
                ))
            ) : (
                <div className="flex">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            )}
        </div>
    );
};

export default Trending;
