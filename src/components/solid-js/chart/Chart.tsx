import { Bar } from 'solid-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';
import Card from '@/components/solid-js/card/Card';

type Dataset = {
  label: string;
  data: number[];
  backgroundColor: string;
};

type RevenueChartProps = {
  data: {
    labels: string[];
    datasets: Dataset[];
  };
};

export function RevenueChart(props: RevenueChartProps) {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    aspectRatio: 12 / 5,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 20,
          font: { family: 'Inter', size: 12 },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        ticks: {
          callback: (value) => `IDR ${value}`,
        },
      },
    },
  };

  const chartData: ChartData<'bar'> = {
    labels: props.data.labels,
    datasets: props.data.datasets,
  };

  return (
    <Card.Root title="Revenue" class="h-full max-h-full w-full max-w-full">
      <Card.Content class="max-h-full max-w-full">
        <div class="mb-4">
          <p class="text-lg font-semibold text-black">IDR 7.852.000</p>
          <p class="text-xs text-green-500 mt-1">▲ 2.1% vs last week</p>
          <p class="text-xs text-muted-foreground">Sales from 1–12 Dec, 2020</p>
        </div>
        <div class="relative h-[200px]">
          <Bar data={chartData} options={options} />
        </div>
      </Card.Content>
    </Card.Root>
  );
}

import { Doughnut } from 'solid-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type OrderTimeCharProps = {
  data: {
    labels: string[];
    datasets: object[];
  };
};

export function OrderTimeChart(props: OrderTimeCharProps) {
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function (context: any) {
            const labels = ['1pm – 4pm', '6pm – 9pm', '9am – 12pm'];
            const orders = ['1.890 orders', '1.512 orders', '1.260 orders'];
            const i = context.dataIndex;
            return `${labels[i]}\n${orders[i]}`;
          },
        },
        backgroundColor: '#1E1B4B',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        titleFont: { weight: 'bold' },
        bodyFont: { weight: 'normal' },
        padding: 12,
        cornerRadius: 8,
      },
    },
  };

  return (
    <Card.Root title="Order Time">
      <div class="flex justify-between items-center mb-2">
        <div>
          <p class="text-xs text-gray-400">From 1–6 Dec, 2020</p>
        </div>
      </div>
      <Card.Content class="max-h-full max-w-full">
        <div class="relative h-[200px]">
          <Doughnut data={props.data} options={options} />
        </div>
        <div class="flex justify-around mt-4 text-xs text-gray-600">
          <div class="flex items-center gap-1">
            <div class="w-2 h-2 rounded-full bg-[#4F46E5]"></div>
            <span>Afternoon</span>
            <span class="font-semibold ml-1 text-gray-800">40%</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="w-2 h-2 rounded-full bg-[#A5B4FC]"></div>
            <span>Evening</span>
            <span class="font-semibold ml-1 text-gray-800">32%</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="w-2 h-2 rounded-full bg-[#E0E7FF]"></div>
            <span>Morning</span>
            <span class="font-semibold ml-1 text-gray-800">28%</span>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  );
}
