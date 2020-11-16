import VueFinalModal from './VueFinalModal.vue'
import ModalsContainer from './ModalsContainer.vue'

function createVfm(Vue, options) {
  let vfm

  return function() {
    let ContainerInstance

    vfm = {
      openedModals: [],
      modals: [],
      show(modal) {
        switch (typeof modal) {
          case 'string':
            this.toggle(name, true)
            break
          case 'object':
            if (!(ContainerInstance && ContainerInstance.$el && ContainerInstance.$el.closest('body'))) {
              Object.assign(ModalsContainer.props, {
                $_options: { default: () => options }
              })
              ContainerInstance = new (Vue.extend(ModalsContainer))()
              ContainerInstance.$mount()
              document.body.appendChild(ContainerInstance.$el)
            }
            ContainerInstance.push(modal)
            break
        }
      },
      hide(name) {
        this.toggle(name, false)
      },
      hideAll() {
        this.openedModals.forEach(modal => {
          modal.$emit('input', false)
        })
      },
      toggle(name, show) {
        const modal = this.modals.find(modal => modal.name === name)
        if (modal !== undefined) {
          modal.$emit('input', show === undefined ? !modal.value : show)
        }
      }
    }
    return vfm
  }
}

export function bindPrototype(Vue, options) {
  const vfm = createVfm(Vue, options)()
  Object.defineProperty(Vue.prototype, options.key, {
    get() {
      return vfm
    }
  })
}

export function registComponent(Vue, options) {
  Object.assign(VueFinalModal.props, {
    $_options: { default: () => options }
  })
  Vue.component(options.componentName, VueFinalModal)
}
