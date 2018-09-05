import Vue from 'vue'
import ByJsonBlock from '../../../../../../../src/containers/ByJsonFileContainer/components/ByJsonBlock/ByJsonBlock.vue'

describe('ByJsonBlock.vue', () => {
  it('should render correct contents', () => {
        const Constructor = Vue.extend(ByJsonBlock)
        const vm = new Constructor({
          propsData: {
            img:'imgUrl',
            title:'title',
            desc:'desc'
          }
        }).$mount()
        expect(vm.$el.querySelector('h6').textContent.trim()).toEqual('title')
        expect(vm.$el.querySelector('p').textContent.trim()).toEqual('desc')
        expect(vm.$el.querySelector('img').getAttribute('src')).toEqual('imgUrl')
          
  })

  describe('ByJsonBlock.vue Methods', () => {

  })
})
