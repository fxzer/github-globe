
<script setup lang="ts">
import { Color } from 'three'
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Globe from './Globe.vue'
</script>

<template>
  <TresCanvas window-size antialias clear-color="#0E1117">
    <TresPerspectiveCamera :position="[0, 0, 400]">
      <TresAmbientLight :color="new Color(0xbbbbbb)" :intensity="1" />
      <TresDirectionalLight :position="[-800, 2000, 400]" :color="new Color(0xffffff)" :intensity="8" />
      <TresDirectionalLight :position="[-200, 500, 200]" :color="new Color(0x7982f6)" :intensity="10" />
      <TresPointLight :position="[-200, 500, 200]" :color="new Color(0x7982f6)" :intensity="50" />
    </TresPerspectiveCamera>
    <TresFog :args="['#535ef3', 400, 2000]" />
    <OrbitControls :enable-damping="true" :damping-factor="0.01" :enable-pan="false" :min-distance="200"
      :max-distance="500" :rotate-speed="0.8" :zoom-speed="1" :auto-rotate="true" :min-polar-angle="Math.PI / 3.5"
      :max-polar-angle="Math.PI - Math.PI / 3" />
    <Suspense>
      <Globe />
    </Suspense>
  </TresCanvas>
</template>
