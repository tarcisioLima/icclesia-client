<template>
  <div>
    <generic-navbar />
    <nuxt />
  </div>
</template>

<script>
import GenericNavbar from '@/components/partials/GenericNavbar'

export default {
    components: {
        'generic-navbar': GenericNavbar
    }
}
</script>
