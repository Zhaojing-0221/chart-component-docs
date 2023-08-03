<template>
    <div class="chart-wapper">
        <IntervalChart
            :data="dataGroup"
            xField="date"
            yField="time"
            seriesField="type"
            transpose="mirror">
        </IntervalChart>
    </div>
</template>
<script setup>
// 图表的数据
const dataGroup = [
    { date: '12-08', time: 10, type: '时间' },
    { date: '12-11', time: 2, type: '时间' },
    { date: '12-14', time: 8, type: '时间' },
    { date: '12-17', time: 25, type: '时间' },
    { date: '12-20', time: 10, type: '时间' },
    { date: '12-31', time: 15, type: '时间' },
    { date: '12-23', time: 18, type: '时间' },
    { date: '12-08', time: 20, type: '次数'},
    { date: '12-11', time: 15, type: '次数' },
    { date: '12-14', time: 1, type: '次数' },
    { date: '12-17', time: 6, type: '次数' },
    { date: '12-20', time: 9, type: '次数' },
    { date: '12-31', time: 0, type: '次数' },
    { date: '12-23', time: 11, type: '次数' },
];
</script>
