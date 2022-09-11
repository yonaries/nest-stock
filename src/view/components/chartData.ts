interface StatDataType {
    increase: boolean,
    series: [
        {
            name: string
            data: data[]
        }
    ]
}

interface data {
    x: number | string
    y: number
}

export const chartStatData: StatDataType = {
    increase: false,
    series: [
        {
            name: "PYPL",
            data: [
                {
                    x: '11:43 GMT',
                    y: 162,
                },
                {
                    x: '12:43 GMT',
                    y: 90,
                },
                {
                    x: '13:43 GMT',
                    y: 50,
                },
                {
                    x: '14:43 GMT',
                    y: 77,
                },
                {
                    x: '15:43 GMT',
                    y: 35,
                },
                {
                    x: '16:43 GMT',
                    y: -45,
                },
                {
                    x: '17:43 GMT',
                    y: -88,
                },
                {
                    x: '18:43 GMT',
                    y: -120,
                },
                {
                    x: '19:43 GMT',
                    y: -156,
                },
                {
                    x: '20:43 GMT',
                    y: -123,
                },
                {
                    x: '21:43 GMT',
                    y: -88,
                },
                {
                    x: '22:43 GMT',
                    y: -66,
                },
                {
                    x: '23:43 GMT',
                    y: -45,
                },
                {
                    x: '24:43 GMT',
                    y: -29,
                },
                {
                    x: '01:43 GMT',
                    y: -45,
                },
                {
                    x: '02:43 GMT',
                    y: -88,
                },
                {
                    x: '03:43 GMT',
                    y: -132,
                },
                {
                    x: '04:43 GMT',
                    y: -146,
                },
                {
                    x: '05:43 GMT',
                    y: -169,
                },
                {
                    x: '06:43 GMT',
                    y: -184,
                },
            ],
        },
    ],
};