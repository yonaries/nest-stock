import { StatDataType, StatAxis } from "./statDataModel";

export interface IntraDayType {
    SYMBOL: string,
    Series: data[]
}

interface data {
    date: string //x-axis
    open: string,
    low: string,
    high: string
    close: string, //y-axis
    volume: string
}

export function parseIntraDay(dayData: IntraDayType) {
    let stock: StatDataType = {
        increase: false,
        currentPrice: 0,
        changePercent: '',
        series: [{
            name: '',
            data: [],
        }]
    };

    dayData.Series.map(e => {
        const data: StatAxis = {
            x: e.date,
            y: parseFloat(parseFloat(e.close).toFixed(2))
        }
        stock.series[0].data.push(data);
    })

    stock.series[0].name = dayData.SYMBOL;
    stock.increase = status(stock);
    stock.currentPrice = setCurrentPice(stock);
    stock.changePercent = setChangePercent(stock);
    return stock;
}

function status(stock: StatDataType) {
    const length = stock?.series[0].data.length
    const open = stock?.series[0].data[0].y
    const close = stock?.series[0].data[length - 1].y

    const range = open - close;
    if (range.toString().charAt(0) === "-") return false;
    return true;
}

function setCurrentPice(stock: StatDataType) {
    const length = stock?.series[0].data.length
    return stock?.series[0].data[length - 1].y
}

function setChangePercent(stock: StatDataType) {
    const length = stock?.series[0].data.length
    const open = stock?.series[0].data[0].y
    const close = stock?.series[0].data[length - 1].y
    const changePrc = ((open - close) / open) * 100

    return changePrc.toFixed(2)
}