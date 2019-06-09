<template>
 <div class="publication-card">
        <div class="publication-header">
            <div class="perfil-photo">               
                <div :style="{height: '100%', width: '100%' }" class="SkeletonBox"></div>
            </div>
        </div>
        <div class="publication-body">
            <div :style="{height: 2, width: '100%', 'border-radius': '5px' }" class="SkeletonBox"></div>
            <div :style="{height: 2, width: '100%', 'border-radius': '5px' }" class="SkeletonBox"></div>
            <div :style="{height: 2, width: '100%', 'border-radius': '5px' }" class="SkeletonBox"></div>
        </div>
       
</div>

</template>

<script>
export default {
  name: 'SkeletonBox',
  props: {
    maxWidth: {
      // The default maxiumum width is 100%.
      default: 100,
      type: Number,
    },
    minWidth: {
      // Lines have a minimum width of 80%.
      default: 80,
      type: Number,
    },
    height: {
      // Make lines the same height as text.
      default: '0.5em',
      type: String,
    },
    width: {
      // Make it possible to define a fixed
      // width instead of using a random one.
      default: null,
      type: String,
    },
  },
  computed: {
    computedWidth() {
      // Either use the given fixed width or
      // a random width between the given min
      // and max values.
      return this.width || `${Math.floor((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)}%`;
    },
  },
};
</script>

<style lang="scss">

@keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
}

.SkeletonBox {
    display: inline-block;
    vertical-align: middle;
    background-color: #DDDBDD;
    position: relative;
    overflow: hidden;
    padding: 0.5rem;
}

.SkeletonBox::after {
    position: absolute;
    top: 0;
    right: 0;    
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0));
    animation: shimmer 5s infinite;
    content: '';
}
</style>