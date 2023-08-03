import DefaultTheme from 'vitepress/theme';
// 图表组件
import chartComponentBase from '../../../packages/g2-chart/chart-component-base.js';
// ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 代码预览
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';

import demo from 'vitepress-demoblock/demo.vue'
// 公共的样式文件
import '../../styles/commom.scss';

export default {
    ...DefaultTheme,
    enhanceApp: async ({ app }) => {
        app.use(chartComponentBase);
        app.use(ElementPlus);
        app.component('demo-preview', NaiveUIContainer);
        app.component('demo', demo)
        app.component('demo', DemoBlock);

    }
}