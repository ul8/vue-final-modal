import { ref, reactive, shallowRef } from 'vue'
import { findRight } from './utils/array'
import VueFinalModal from './VueFinalModal.vue'
import ModalsContainer from './ModalsContainer.vue'

function assignOptions(component, options) {
  Object.assign(component.props, {
    _options: { default: () => options }
  })
  return component
}

function createVfm(options) {
  let vfm
  const PREFIX = '_dynamic_modal_'
  const generateId = ((index = 0) => () => (index++).toString())()

  return function() {
    vfm = {
      openedModals: [],
      modals: [],
      dynamicModals: reactive([]),
      show(modal) {
        switch (typeof modal) {
          case 'string':
            this.toggle(modal, true)
            break
          case 'object':
            const defaultModal = {
              component: options.componentName,
              props: {},
              slots: {},
              events: {}
            }
            modal = Object.assign(defaultModal, modal)
            const id = generateId()
            const name = modal.bind.name || PREFIX + id
            this.dynamicModals.push({
              value: ref(true),
              id,
              ...modal,
              component: shallowRef(modal.component),
              slots: shallowRef(modal.slots),
              bind: { ...modal.bind, name }
            })
            break
        }
      },
      hide(name) {
        this.toggle(name, false)
      },
      hideAll() {
        for (let i = this.openedModals.length - 1; i >= 0; i--) {
          this.openedModals[i].emit('update:modelValue', false)
        }
      },
      toggle(name, show) {
        const modal = findRight(this.modals, modal => modal.name === name)
        if (modal !== undefined) {
          modal.emit('update:modelValue', show === undefined ? !modal.modelValue : show)
        }
      }
    }
    return vfm
  }
}

export function bindPrototype(app, options) {
  const vfm = createVfm(options)()
  Object.defineProperty(app.config.globalProperties, options.key, {
    get() {
      return vfm
    }
  })
  app.provide(options.key, vfm)
}

export function registModal(app, options) {
  app.component(options.componentName, assignOptions(VueFinalModal, options))
}

export function registContainer(app, options) {
  app.component(options.dynamicContainerName, assignOptions(ModalsContainer, options))
}
