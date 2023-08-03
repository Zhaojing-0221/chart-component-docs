<template>
    <div class="chart-wapper dark">
        <div style="width: 200px;height: 200px;margin: auto;">
            <circular-progress :data="dataBase" :theme="theme"></circular-progress>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const dataBase = ref([
    { x: '测试一', y: 60 },
    { x: '测试二', y: 100 },
]);
const theme = ref('blueDark.circular')
</script>
<style scoped lang="scss"></style>