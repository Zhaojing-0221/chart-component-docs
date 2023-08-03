<template>
        <div class="chart-wapper">
            <div class="legend">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox style="color: #1e91f5" label="功率"></el-checkbox>
                    <el-checkbox style="color: #8574f3" label="带速"></el-checkbox>
                </el-checkbox-group>
            </div>
            <DoubleYArea :data="data" :line="props.line" :color="props.color" :fillColor="props.fillColor"
            :axis="props.axis" :chartBasic="props.chartBasic" :tooltip="props.tooltip" :view="props.view" ></DoubleYArea>
        </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const props = {
    chartBasic:{
        padding:[40,40,20,40]
    },
    color:'#1e91f5',
    fillColor:'#1e91f570',
    line: {
        smooth: true,
    },
    axis:{
        xAxis:{
            scale: {
                range:[0,1]
            }
        },
        yAxis:{
            position: 'left',
            grid: {
                line:{
                    style:{
                        lineDash:[2,2,2,2],
                        lineWidth: 1,
                        stroke: '#ffffff10'
                    }
                }
            },
            scale: {
                ticks: [0, 5, 10, 15, 20],
            }
        }
    },
    tooltip:{
        shared: true,
    },
    view:[
        {
            color:'#8574f3',
            fillColor:'#8574f370',
            line: {
                smooth: true,
            },
            axis:{
                position: 'right',
                grid: {
                    line:{
                        style:{
                            lineDash:[2,2,2,2],
                            lineWidth: 1,
                            stroke: '#ffffff10'
                        }
                    }
                },
                scale: {
                    ticks: [0, 20, 40, 60, 80],
                },
            }
        }
    ]
}

const response = [
    {
        x:'00:00',
        y1:11,
        y2:40
    },    
    {
        x:'02:00',
        y1:12,
        y2:50
    },
    {
        x:'04:00',
        y1:13,
        y2:60
    },
    {
        x:'06:00',
        y1:14,
        y2:50
    },
    {
        x:'08:00',
        y1:17,
        y2:30
    },
    {
        x:'10:00',
        y1:13,
        y2:20
    },
    {
        x:'12:00',
        y1:12,
        y2:20
    }
]
const checkList = ref(['带速']);
const data = computed(() => {
    if (checkList.value.includes('功率') && !checkList.value.includes('带速')) {
        return response.map(it => ({
            x: it.x,
            y1: it.y1,
        }));
    } 
    if (!checkList.value.includes('功率') && checkList.value.includes('带速')) {
        return response.map(it => ({
            x: it.x,
            y2:it.y2
        }));
    } 
    if (!checkList.value.includes('带速') && !checkList.value.includes('功率')){
        return response.map(it => ({
            x: it.x,
        }));
    } 
    return response
});

</script>
<style>
    .chart-wapper{
        position: relative;
    }
    .legend {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 1000;
    }
</style>