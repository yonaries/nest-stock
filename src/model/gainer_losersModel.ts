export interface MostGL {
    data: StockGL[]
}
export interface StockGL {
    symbol: string
    name: string
    price: string
    change: string
    changesPercentage: string
}