<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem] w-[68rem] mt-5 bg-white p-5" />
    </div>
</template>

<script setup lang="ts">

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Products Sold',
                data: [65, 59, 80, 81, 56, 55],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--p-blue-300'),
                tension: 0.4,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
            },
            {
                label: 'Total Views',
                data: [28, 48, 40, 19, 86, 27],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--p-purple-300'),
                tension: 0.4,
                backgroundColor: 'rgba(180, 137, 222, 0.2)',
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>
