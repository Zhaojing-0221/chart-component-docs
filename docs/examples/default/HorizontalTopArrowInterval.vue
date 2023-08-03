<template>
    <div class="chart-wapper">
        <IntervalChart
            :data="dataBase"
            transpose="horizontal"
            :style="style">
        </IntervalChart>
    </div>
</template>
<script setup>
// 箭头的颜色必须和color颜色相同
import arrowtwo from '../../public/examples/arrow_main_bluedark.png';
// 图表的数据
const dataBase = [
    { x: '第一个', y: 801 },
    { x: '第二个', y: 100 },
    { x: '第三个', y: 819 },
    { x: '第四个', y: 678 },
    { x: '第五个', y: 823 },
];
const axis = {
    xAxis: {
        line: {
            style: {
                // 轴线颜色
                stroke: 'rgba(57, 69, 106, 0.5)',
            },
        },
        label: {
            style: {
                fontSize: 14,
                fill: 'rgba(255, 255, 255, 0.7)'
            }
        },
        tickLine: null // 关闭刻度线
    },
    yAxis: false // 关闭y轴的显示
};
const style ={
    barWidth: 16,   // 条形图的宽度
    shape: arrowtwo  // 条形图顶部的图片
};
</script>
