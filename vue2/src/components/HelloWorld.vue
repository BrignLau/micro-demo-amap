<template>
  <div id="hello"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig = {
  securityJsCode: 'e7df0718bd2961f6f448b43bea8556ba'
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initMap()
  },
  beforeDestroy() {
    if (this.map) {
      // this.$amapComponent.clearMap()
      this.map.destroy()
      this.map = null
    }
  },
  methods: {
    initMap() {
      // const mapStatus = this.$store.state.app.mapStatus
      AMapLoader.load({
        key: '56fa79e9144624a2c948d76ad9d28adf',
        version: '2.0',
        AMapUI: {
          version: '1.1',
          plugins: ['overlay/SimpleMarker']
        }
      })
        .then((AMap) => {
          console.log('MapObjects', window.AMap, window.AMapUI)
          this.$amapComponent = new AMap.Map('hello', {
            resizeEnable: true,
            zoomEnable: true
          })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  height: 400px;
  width: 100%;
}
</style>
