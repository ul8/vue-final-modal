<template>
  <div id="app" class="p-4">
    <button class="vfm-btn mb-4" @click="dynamic">Dynamic Modal</button>

    <BasicOptions />

    <p class="text-xl py-2">v-basic:</p>
    <v-basic></v-basic>
    <p class="text-xl py-2">v-background:</p>
    <v-background></v-background>
    <p class="text-xl py-2">v-centered:</p>
    <v-centered></v-centered>
    <p class="text-xl py-2">v-content:</p>
    <v-content></v-content>
    <p class="text-xl py-2">v-close:</p>
    <v-close-button></v-close-button>
    <p class="text-xl py-2">v-scrollable:</p>
    <v-scrollable></v-scrollable>
    <p class="text-xl py-2">v-action:</p>
    <v-action-buttons></v-action-buttons>
    <p class="text-xl py-2">v-stackable:</p>
    <v-stackable></v-stackable>

    <div v-for="i in 100" :key="i">{{ i }}</div>
  </div>
</template>

<script>
import BaseLorem from '@/components/BaseLorem'
import VModal from '@/components/hoc/VModal'

export default {
  methods: {
    dynamic() {
      this.$vfm.show({
        component: VModal,
        slots: {
          default: {
            component: BaseLorem,
            props: {
              text: 'Text has been passed as a property.'
            }
          },
          title: {
            component: BaseLorem,
            props: {
              text: 'Text has been passed as a property.'
            }
          }
        },
        props: {
          name: 'dynamic',
          focusTrap: true
          // preventClick: true
          // attach: '#attach'
        },
        events: {
          cancel: () => {
            console.log('cancel')
            this.$vfm.hide('dynamic')
          },
          confirm: () => {
            console.log('confirm')
            this.$vfm.hide('dynamic')
          },
          closed() {
            console.log('closed')
          }
        }
      })
    }
  }
}
</script>
