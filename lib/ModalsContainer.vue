<template>
  <div class="modals-container">
    <component
      :is="modal.component"
      v-for="(modal, index) in dynamicModals"
      :key="modal.id"
      v-model="modal.value"
      v-bind="modal.bind"
      v-on="modal.on"
      @closed="slice(index)"
    >
      <template v-for="(slot, key) in modal.slots" :key="key" #[key]>
        <component :is="slot.component" v-bind="slot.bind" />
      </template>
    </component>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  props: {},
  setup(props) {
    const $vfm = inject(props._options.key)

    return {
      dynamicModals: $vfm.dynamicModals,
      slice(index) {
        $vfm.dynamicModals.splice(index, 1)
      }
    }
  }
}
</script>
