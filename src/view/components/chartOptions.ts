import { ApexOptions } from "apexcharts";
import { chartStatData } from "./chartData";


function chartColor(status: boolean) {
    if (status) return '#06cc31'
    return 'rgb(255, 0, 0)'
}

export function chartOptions(status: boolean) {

    const _options: ApexOptions = {
        chart: {
            type: "area",
            height: 300,
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 1,
            curve: "straight",
        },
        yaxis: {
            show: false
        },
        theme: {
            monochrome: {
                enabled: true,
                color: chartColor(status),
                shadeTo: 'light',
                shadeIntensity: 0.65
            }
        },
        tooltip: {
            x: {
                show: false,
            },
            shared: false,
            fixed: {
                enabled: false,
                position: "topRight",
            },

        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                },
            }
        },
    }

    return _options;
}