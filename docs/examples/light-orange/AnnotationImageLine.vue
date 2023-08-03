<template>
    <div class="chart-wapper">
        <Line :data="dataPic" theme="lightOrange.default"></Line>
    </div>
</template>
<script setup>
// import chartArrow from '../../public/chart-arrow.svg'
// 图表的数据
const dataPic = [
    { x: "00:00", y: 332 },
    { x: "04:00", y: 202 },
    { x: "08:00", y: 322 },
    { x: "12:00", y: 132 },
    { x: "16:00", y: 152 },
    { x: "20:00", y: 100 },
    { x: "22:00", y: 240 },
    { x: "24:00", y: 170 },
]


</script>