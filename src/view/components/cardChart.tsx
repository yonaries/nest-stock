import Chart from "react-apexcharts";
import { _options } from "./chartOptions";

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

    return (
        <div id="chart" className="flex h-full w-full z-10">
            <Chart
                options={_options}
                series={props.series}
                type="area"
            />
        </div>
    );
};
