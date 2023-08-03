<template>
    <div class="chart-wapper dark">
        <div style="width: 150px;height: 150px;;margin: auto;">
            <text-marker-circular
                :animation="{elementSelected: 2}"
                :data="data">
            </text-marker-circular>
        </div>
    </div>
</template>
<script setup>

import { ref } from 'vue'

const data = ref([
    { x: '机电设备故障', y: 12 },
    { x: '材料供应超时', y: 15 },
    { x: '大块矸石堵仓', y: 12 },
    { x: '提升系统停机', y: 15 },
    { x: '个人违章违纪', y: 16 },
]);
</script>
<style lang="scss">
.chart-wapper{
    .content div{
        font-size: 16px;
    }
}
</style>