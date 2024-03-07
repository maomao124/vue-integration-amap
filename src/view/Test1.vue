<template>
    <div>
        <div id="container"></div>
        <div>
            <button @click="addPoint">添加点</button>
            <button @click="add500Point">添加500个点</button>
            <button @click="clear">清空</button>
        </div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
    mounted()
    {
        window._AMapSecurityConfig = {
            serviceHost: `http://127.0.0.1:8089/_AMapService`
        }
        this.initAMap();
    },
    unmounted()
    {
        this.map?.destroy();
    },
    methods:
        {
            /**
             * 初始化高德地图
             */
            initAMap()
            {
                AMapLoader.load({
                    key: "318d115b92dd7beb6e26260a2e208256", // 申请好的Web端开发者Key，首次调用 load 时必填
                    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                    // 需要使用的的插件列表，如比例尺'AMap.Scale'等
                    plugin: [
                        'AMap.Autocomplete', // 输入提示插件
                        'AMap.PlaceSearch', // POI搜索插件
                        'AMap.Scale', // 右下角缩略图插件 比例尺
                        'AMap.OverView', // 地图鹰眼插件
                        'AMap.ToolBar', // 地图工具条
                        'AMap.Geolocation', // 定位控件，用来获取和展示用户主机所在的经纬度位置
                        'AMap.MarkerClusterer',
                        'AMap.Geocoder'
                    ],
                })
                    .then((AMap) =>
                    {
                        this.map = new AMap.Map("container", {
                            // 设置地图容器id
                            viewMode: "3D", // 是否为3D地图模式
                            zoom: 12, // 初始化地图级别
                            center: [111.397428, 23.90923], // 初始化地图中心点位置
                        });
                    })
                    .catch((e) =>
                    {
                        console.log(e);
                    });
            },
            addPoint()
            {
                const marker = new AMap.Marker({
                    position: [100 + Math.random() * 22, 22 + Math.random() * 20]
                })
                this.map.add(marker);
            },
            clear()
            {
                this.map.clearMap();
            },
            add500Point()
            {
                for (let i = 0; i < 500; i++)
                {
                    const marker = new AMap.Marker({
                        position: [100 + Math.random() * 22, 22 + Math.random() * 20]
                    })
                    this.map.add(marker);
                }
            }
        },
}
</script>

<style scoped>
#container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 800px;
}
</style>
