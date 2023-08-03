<template>
    <div class="chart-wapper">
        <IntervalChart
            :data="dataGroup"
            seriesField="type"
            transpose="mirror"
            theme="blueDark"
            :annotation="annotation">
        </IntervalChart>
    </div>
</template>
<script setup>
// 图表的数据
const dataGroup = [
    {   x: '12-08', y: 10, type: '时间' },
    {   x: '12-11', y: 40, type: '时间' },
    {   x: '12-14', y: 8, type: '时间' },
    {   x: '12-17', y: 25, type: '时间' },
    {   x: '12-20', y: 10, type: '时间' },
    {   x: '12-31', y: 15, type: '时间' },
    {   x: '12-23', y: 18, type: '时间' },
    {   x: '12-08', y: 20, type: '次数'},
    {   x: '12-11', y: 15, type: '次数' },
    {   x: '12-14', y: 1, type: '次数' },
    {   x: '12-17', y: 6, type: '次数' },
    {   x: '12-20', y: 9, type: '次数' },
    {   x: '12-31', y: 0, type: '次数' },
    {   x: '12-23', y: 11, type: '次数' },
];

const annotation = {
    dataMarker: [
        {
            position: ['12-08', 8],  // 标记的位置： 12-08 对应x轴的数据 8： 对应y轴的数据
            line: null,   // 不显示标注线
        },
        {
            position: ['12-17', 25],
            line: null,
        }
    ]

};
</script>
