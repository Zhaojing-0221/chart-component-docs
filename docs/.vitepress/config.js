import { defineConfig } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';

import { applyPlugins } from '@ruabick/md-demo-plugins';
import demoblock from 'vitepress-demoblock';

export default defineConfig({
    dest: 'public',
    base: '/docs/',
    title: '图表组件库',
    description: '图表组件库-基于antv-g2(v4)的一个图表组件库',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '教程', link: '/guide/introduction', activeMatch: '/guide/introduction' },
            { text: '图表示例', link: '/chart-examples/all-examples', activeMatch: '/chart-examples/all-examples' },
            { text: '图表参数', link: '/chart-api/chartBasic' },
            { text: '图表主题', link: '/chart-theme/index' },
            { text: '常见问题', link: '/questions/' },
        ],
        // 侧边栏导航
        sidebar: {
            '/guide/': [
                { text: 'Introduction', link: '/guide/introduction' },
                { text: '快速上手', link: '/guide/getting-started' },
            ],
            '/chart-examples/': [
                {
                    text: '所有示例',
                    link: '/chart-examples/all-examples',
                },
                {
                    text: '饼图-Pie',
                    link: '/chart-examples/pie/base-pie',
                    items: [
                        { text: '基础饼图', link: '/chart-examples/pie/base-pie' },
                        { text: '环形图', link: '/chart-examples/pie/ring-pie' },
                        { text: '带动画效果的饼图', link: '/chart-examples/pie/animation-pie.md' },
                        { text: '定制环形图', link: '/chart-examples/pie/custom-pie' },
                        { text: '进度条环形图', link: '/chart-examples/pie/progress-ring' },
                    ],
                },
                {
                    text: '折线图-Line',
                    link: '/chart-examples/base-line',
                    items: [
                        { text: '基础折线图', link: '/chart-examples/base-line' },
                        { text: '平滑折线图', link: '/chart-examples/smooth-line' },
                        { text: '带标注的折线图', link: '/chart-examples/annotation-line' },
                        { text: '大数据折线图', link: '/chart-examples/bigdata-line' },
                    ],
                },
                {
                    text: '面积图-Area',
                    link: '/chart-examples/base-area',
                    items: [
                        { text: '基础面积图', link: '/chart-examples/base-area' },
                        { text: '堆叠面积图', link: '/chart-examples/stack-area' },
                        { text: '带标注面积图', link: '/chart-examples/annotation-area' },
                        { text: '带交互面积图', link: '/chart-examples/interaction-area' },
                    ],
                },
                {
                    text: '条形图-Interval',
                    link: '/chart-examples/base-interval',
                    items: [
                        { text: '基础条形图', link: '/chart-examples/base-interval' },
                        { text: '镜像分组条形图', link: '/chart-examples/mirror-group-interval' },
                        { text: '特殊形状的条形图', link: '/chart-examples/horizontal-topArrow-interval' },
                    ],
                },
                {
                    text: '仪表盘-DashBoard',
                    link: '/chart-examples/base-dashboard',
                    items: [
                        { text: '基础仪表盘', link: '/chart-examples/base-dashboard' },
                        { text: '带指针仪表盘', link: '/chart-examples/pointer-dashboard' },
                    ],
                },
                {
                    text: '雷达图-Radar',
                    link: '/chart-examples/base-radar',
                    items: [
                        { text: '基础雷达图', link: '/chart-examples/base-radar' },
                    ],
                },
                {
                    text: '双Y轴面积图-DoubleYArea',
                    link: '/chart-examples/base-radar',
                    items: [
                        { text: '基础双Y轴面积图', link: '/chart-examples/base-doubleYArea' },
                        { text: '带图例双Y轴面积图', link: '/chart-examples/legend-doubleYArea' },
                    ],
                }

            ],
            '/chart-api': [
                // { text: '参考', link: '/chart-api/index' },
                // { text: '折线图', link: '/chart-api/chart-line' },
                // { text: '面积图', link: '/chart-api/chart-area' },
                {
                    text: '基础参数',
                    link: '/chart-api/chartBasic',
                    items: [
                        { text: '图表对象 - chartBasic', link: '/chart-api/chartBasic' },
                        { text: '图表数据 - data', link: '/chart-api/data' },
                        { text: '图表颜色 - color&fillColor', link: '/chart-api/color' },
                        { text: '字段 - Field', link: '/chart-api/field' },
                        { text: '坐标轴 - axis', link: '/chart-api/axis' },
                        { text: '提示信息 - tooltip', link: '/chart-api/tooltip' },
                        { text: '图例 - legend', link: '/chart-api/legend' },
                        { text: '标注 - annotation', link: '/chart-api/annotation' },
                        { text: '坐标系 - coordinate', link: '/chart-api/coordinate' },
                        { text: '调整 - adjust', link: '/chart-api/adjust' },
                        { text: '线条 - line', link: '/chart-api/line' },
                        { text: '滚动条-scrollbar', link: '/chart-api/scrollbar' },
                        { text: '条形图样式-style', link: '/chart-api/style' },
                        { text: '转化-transpose', link: '/chart-api/transpose' }
                    ],
                },
                {
                    text: '样式属性',
                    link: '/chart-api/style-attr',
                    items: [
                        { text: '样式属性', link: '/chart-api/style-attr' },
                    ],
                }
            ],
            'chart-theme': [
                {
                    text: '图表主题',
                    link: '/chart-theme/index',
                },
                {
                    text: 'blueDark主题',
                    link: '/chart-theme/blue-dark',
                },
                {
                    text: 'lightOrange主题',
                    link: '/chart-theme/light-orange',
                },
                {
                    text: 'aiBlue主题',
                    link: '/chart-theme/ai-blue',
                }
            ]
        },
    },
    // markdown-it
    markdown: {
        // 代码显示行号
        lineNumbers: true,
        config(md) {
            applyPlugins(md);
            md.use(componentPreview);
            md.use(containerPreview);
            md.use(demoblock)

        }
    },
    // 打包后的输出目录
    outDir: '../public/',
});