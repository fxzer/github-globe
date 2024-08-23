<script setup lang='ts'>
import { Color, MeshPhongMaterial } from 'three'
import ThreeGlobe from 'three-globe'

import countries from './geo.json'

const N = 20

const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: ['#ec4899', '#fff', '#f59e0b', '#0ea5e9','#8b5cf6','#84cc16'][Math.round(Math.random() * 4)]
}))

const Globe = new ThreeGlobe()
  .hexPolygonsData(countries.features)
  .hexPolygonResolution(3) // 用于H3定义的地理分箱分辨率。确定镶嵌地球表面的六边形的面积
  .hexPolygonMargin(0.8) // 边距
  .showAtmosphere(true) // 是否显示围绕地球的明亮光晕，代表大气层
  .atmosphereColor('#2C46B5') // 大气颜色
  .atmosphereAltitude(0.2) // 表示大气最大高
  .arcsData(arcsData) // 弧映射图层中列表。
  .arcColor('color') // 线条颜色的 Arc 对象访问器函数或属性
  .arcDashLength(0.9) // 用于表示圆弧中虚线段的长度
  .arcDashGap(5) // 用于表示短划线段之间的间隙长度
  .arcDashInitialGap(() => Math.random() * 5) // 初始间隙长度
  .arcDashAnimateTime(2000) // 用于对整行长度从起点到终点置的运动进行动画处理。
  .arcsTransitionDuration(2000) // 过渡持续时间

const globeMaterial = Globe.globeMaterial() as MeshPhongMaterial
globeMaterial.color = new Color('#101731')
globeMaterial.emissive = new Color('#466BC5') // 材质的放射（光）颜色

globeMaterial.emissiveIntensity = 0.25 // 放射光强度
globeMaterial.shininess = 0.1// 高亮的程度，越高的值越闪亮
</script>

<template>
  <primitive :object="Globe" />
</template>


<style scoped lang='scss'></style>
