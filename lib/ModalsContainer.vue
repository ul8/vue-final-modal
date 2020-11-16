<template>
  <div class="modals-container">
    <component
      v-for="(modal, index) in modals"
      :key="modal.id"
      :is="modal.component"
      v-model="modal.value"
      v-bind="modal.props"
      v-on="modal.events"
      @closed="pop(index)"
    >
      <template v-for="(slot, key) in modal.slots" v-slot:[key]>
        <component :key="key" :is="slot.component" v-bind="slot.props" @close="modal.value = false" />
      </template>
    </component>
  </div>
</template>

<script>
const generateId = ((index = 0) => () => (index++).toString())()

const PREFIX = '_dynamic_modal_'

export default {
  props: {},
  data: () => ({
    modals: []
  }),
  computed: {
    modal() {
      return {
        component: this.$_options.componentName,
        props: {},
        slots: {},
        events: {}
      }
    }
  },
  methods: {
    push(modal) {
      modal = Object.assign({}, this.modal, modal)
      const id = generateId()
      const name = modal.props.name || PREFIX + id

      this.modals.push({
        value: true,
        id,
        ...modal,
        props: { ...modal.props, name }
      })
    },
    pop(index) {
      this.modals.splice(index, 1)
    }
  }
}
</script>
