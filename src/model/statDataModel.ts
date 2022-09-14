export interface StatDataType {
    increase: boolean,
    currentPrice: number,
    changePercent: string,
    series: [
        {
            name: string
            data: StatAxis[]
        }
    ]
}

export interface StatAxis {
    x: number | string
    y: number
}