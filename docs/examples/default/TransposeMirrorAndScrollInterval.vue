<template>
    <div class="chart-wapper">
        <IntervalChart
            :data="dataGroupMax"
            seriesField="type"
            transpose="mirror">
        </IntervalChart>
    </div>
</template>
<script setup>
// 图表的数据
const dataGroupMax = [
    { x: '11-15', y: 10, type: '时间' },
    { x: '11-16', y: 2, type: '时间' },
    { x: '11-17', y: 8, type: '时间' },
    { x: '11-18', y: 25, type: '时间' },
    { x: '11-19', y: 10, type: '时间' },
    { x: '11-20', y: 15, type: '时间' },
    { x: '11-21', y: 18, type: '时间' },
    { x: '11-22', y: 10, type: '时间' },
    { x: '11-23', y: 2, type: '时间' },
    { x: '11-24', y: 8, type: '时间' },
    { x: '11-25', y: 25, type: '时间' },
    { x: '11-26', y: 10, type: '时间' },
    { x: '11-27', y: 15, type: '时间' },
    { x: '11-28', y: 18, type: '时间' },
    { x: '11-29', y: 10, type: '时间' },
    { x: '11-30', y: 2, type: '时间' },
    { x: '12-01', y: 8, type: '时间' },
    { x: '12-02', y: 25, type: '时间' },
    { x: '12-03', y: 10, type: '时间' },
    { x: '12-04', y: 15, type: '时间' },
    { x: '12-05', y: 18, type: '时间' },
    { x: '12-06', y: 10, type: '时间' },
    { x: '12-07', y: 2, type: '时间' },
    { x: '12-08', y: 8, type: '时间' },
    { x: '12-09', y: 25, type: '时间' },
    { x: '12-10', y: 10, type: '时间' },
    { x: '12-11', y: 15, type: '时间' },
    { x: '12-12', y: 18, type: '时间' },
    { x: '12-13', y: 10, type: '时间' },
    { x: '12-14', y: 2, type: '时间' },
    { x: '12-15', y: 8, type: '时间' },
    { x: '12-16', y: 25, type: '时间' },
    { x: '12-17', y: 10, type: '时间' },
    { x: '12-18', y: 15, type: '时间' },
    { x: '12-19', y: 18, type: '时间' },
    { x: '12-20', y: 10, type: '时间' },
    { x: '12-21', y: 2, type: '时间' },
    { x: '11-15', y: 10, type: '次数' },
    { x: '11-16', y: 2, type: '次数' },
    { x: '11-17', y: 8, type: '次数' },
    { x: '11-18', y: 25, type: '次数' },
    { x: '11-19', y: 10, type: '次数' },
    { x: '11-20', y: 15, type: '次数' },
    { x: '11-21', y: 18, type: '次数' },
    { x: '11-22', y: 10, type: '次数' },
    { x: '11-23', y: 2, type: '次数' },
    { x: '11-24', y: 8, type: '次数' },
    { x: '11-25', y: 25, type: '次数' },
    { x: '11-26', y: 10, type: '次数' },
    { x: '11-27', y: 15, type: '次数' },
    { x: '11-28', y: 18, type: '次数' },
    { x: '11-29', y: 10, type: '次数' },
    { x: '11-30', y: 2, type: '次数' },
    { x: '12-01', y: 8, type: '次数' },
    { x: '12-02', y: 25, type: '次数' },
    { x: '12-03', y: 10, type: '次数' },
    { x: '12-04', y: 15, type: '次数' },
    { x: '12-05', y: 18, type: '次数' },
    { x: '12-06', y: 10, type: '次数' },
    { x: '12-07', y: 2, type: '次数' },
    { x: '12-08', y: 8, type: '次数' },
    { x: '12-09', y: 25, type: '次数' },
    { x: '12-10', y: 10, type: '次数' },
    { x: '12-11', y: 15, type: '次数' },
    { x: '12-12', y: 18, type: '次数' },
    { x: '12-13', y: 10, type: '次数' },
    { x: '12-14', y: 2, type: '次数' },
    { x: '12-15', y: 8, type: '次数' },
    { x: '12-16', y: 25, type: '次数' },
    { x: '12-17', y: 10, type: '次数' },
    { x: '12-18', y: 15, type: '次数' },
    { x: '12-19', y: 18, type: '次数' },
    { x: '12-20', y: 10, type: '次数' },
    { x: '12-21', y: 2, type: '次数' },
];
const color = ['#1E91F5', '#8574F3'];
const axis = {
    yAxis: {
        unit: [
            {
                content: '时',
                position: ['-4%', '-20%'],
            },
            {
                content: '次',
                position: ['-4.5%', '110%'],  // 调整文字位置
            }
        ]
    }

}
// 图例
const legend = {
    position: 'top',
    marker: {
        symbol: 'circle',
    },
};
// 提示信息： 关闭辅助提示
const tooltip = {
    crosshairs: null,
    title: title => title,
};
const style = {
    barWidth: 16, // 条形图的宽度
    shape: 'topTriangle'  // 设置条形图顶部形状为三角形
}
// 图例交互默认关闭，可通过以下参数进行关闭
const interaction = {
    'legend-filter': true
};
</script>
