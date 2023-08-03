<template>
    <div class="chart-wapper">
        <RadarChart :data="option3.data" x-field="item" y-field="score" series-field="user">
        </RadarChart>
    </div>
</template>
<script setup>
// 图表的数据
const option3 = {
    data: [
        { item: 'Design', user: 'a', score: 70 },
        { item: 'Design', user: 'b', score: 30 },
        { item: 'Development', user: 'a', score: 60 },
        { item: 'Development', user: 'b', score: 70 },
        { item: 'Marketing', user: 'a', score: 50 },
        { item: 'Marketing', user: 'b', score: 60 },
        { item: 'Users', user: 'a', score: 40 },
        { item: 'Users', user: 'b', score: 50 },
        { item: 'Test', user: 'a', score: 60 },
        { item: 'Test', user: 'b', score: 70 },
        { item: 'Language', user: 'a', score: 70 },
        { item: 'Language', user: 'b', score: 50 },
        { item: 'Technology', user: 'a', score: 50 },
        { item: 'Technology', user: 'b', score: 40 },
    ],
    color: ['#C05DB1', 'rgba(255, 176, 101, 1)'],
};

</script>