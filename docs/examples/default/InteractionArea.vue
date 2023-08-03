<template>
    <div class="chart-wapper">
        <Area :data="dataMuti" :annotation="annotation"></Area>
    </div>
</template>

<script setup>
import '../../styles/commom.scss';
// 图表的数据
const annotation = {
    regionFilter: [
        {
            color: 'rgba(0, 0, 0, 0.2)',
            top: true,
            start: ['min', 'max'],
            end: ['4-2', 100],
        },
        {
            color: 'rgba(0, 0, 0, 0.2)',
            top: true,
            start: ['5-7', 'max'],
            end: ['max', 100],
        }
    ],
}
const dataMuti = [
    { x: "4-1", y: 332, group: '综采一队' },
    { x: "4-2", y: 202, group: '综采一队' },
    { x: "4-3", y: 322, group: '综采一队' },
    { x: "4-4", y: 132, group: '综采一队' },
    { x: "4-5", y: 152, group: '综采一队' },
    { x: "4-6", y: 232, group: '综采一队' },
    { x: "4-7", y: 632, group: '综采一队' },
    { x: "4-8", y: 132, group: '综采一队' },
    { x: "4-9", y: 532, group: '综采一队' },
    { x: "4-10", y: 132, group: '综采一队' },
    { x: "4-11", y: 632, group: '综采一队' },
    { x: "4-12", y: 332, group: '综采一队' },
    { x: '4-13', y: 345, group: '综采一队' },
    { x: '4-14', y: 303, group: '综采一队' },
    { x: '4-15', y: 421, group: '综采一队' },
    { x: '4-16', y: 345, group: '综采一队' },
    { x: '4-17', y: 675, group: '综采一队' },
    { x: '4-18', y: 743, group: '综采一队' },
    { x: '4-19', y: 342, group: '综采一队' },
    { x: '4-20', y: 567, group: '综采一队' },
    { x: '4-21', y: 346, group: '综采一队' },
    { x: '4-22', y: 367, group: '综采一队' },
    { x: '4-23', y: 976, group: '综采一队' },
    { x: '4-24', y: 888, group: '综采一队' },
    { x: '4-25', y: 777, group: '综采一队' },
    { x: '4-26', y: 145, group: '综采一队' },
    { x: '4-27', y: 355, group: '综采一队' },
    { x: '4-28', y: 235, group: '综采一队' },
    { x: '4-29', y: 145, group: '综采一队' },
    { x: '4-30', y: 305, group: '综采一队' },
    { x: '5-1', y: 535, group: '综采一队' },
    { x: '5-2', y: 745, group: '综采一队' },
    { x: '5-3', y: 645, group: '综采一队' },
    { x: '5-4', y: 145, group: '综采一队' },
    { x: '5-5', y: 345, group: '综采一队' },
    { x: '5-6', y: 245, group: '综采一队' },
    { x: '5-7', y: 345, group: '综采一队' },
    { x: '5-8', y: 367, group: '综采一队' },
    { x: '5-9', y: 545, group: '综采一队' },
    { x: '5-10', y: 445, group: '综采一队' },

];

</script>