import Chart from "react-apexcharts";
import { chartOptions } from "./chartOptions";

interface Props {
    increase: boolean | undefined,
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

export const CardChart = (props: Props) => {
    const _options = chartOptions(props.increase!)

    return (
        <div id="chart" className="flex h-full w-full z-10">
            <Chart
                options={_options}
                series={props.series}
                type="area"
                height={200}
            />
        </div>
    );
};
