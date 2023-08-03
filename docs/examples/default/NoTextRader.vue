<template>
    <div class="chart-wapper">
        <RadarChart :data="data" :axis="axis"></RadarChart>
    </div>
</template>
<script setup>
// 图表的数据
const data = [
    { x: '1', y: 10 },
    { x: '2', y: 60 },
    { x: '3', y: 50 },
    { x: '4', y: 30 },
    { x: '5', y: 58 },
    { x: '6', y: 50 },
    { x: '7', y: 30 },
    { x: '8', y: 58 }
];
const axis = {
    xAxis: {
        label: null, // 关闭x轴的文本
    },
    yAxis: {
        label: null, // 关闭y轴的文本
    },
}
</script>