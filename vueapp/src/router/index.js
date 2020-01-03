import Vue from 'vue' 
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataFunction from '@/components/DataFunction'
import DataBinding from '@/components/DataBinding'
import Methods from '@/components/Methods'
import Watch from '@/components/Watch'
import LifecycleHooks from '@/components/LifecycleHooks' 
import StyleBinding from '@/components/StyleBinding'
import TemplateRender from '@/components/TemplateRender'
import ListRender from '@/components/ListRender'
import EventHandling from '@/components/EventHandling'
import FormInputBinding from '@/components/FormInputBinding'
import Coins from '@/components/Coins'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/data-binding',
      name: 'DataBinding',
      component: DataBinding
    },
    {
      path: '/data-function',
      name: 'DataFunction',
      component: DataFunction
    },
    {
      path: '/methods',
      name: 'Methods',
      component: Methods
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/lifecycle-hooks',
      name: 'LifecycleHooks',
      component: LifecycleHooks
    },
    {
      path: '/style-binding',
      name: 'StyleBinding',
      component: StyleBinding
    },
    {
      path: '/template-render',
      name: 'TemplateRender',
      component: TemplateRender
    },
    {
      path: '/list-render',
      name: 'ListRender',
      component: ListRender
    },
    {
      path: '/event-handling',
      name: 'EventHandling',
      component: EventHandling
    },
    {
      path: '/form-input-binding',
      name: 'FormInputBinding',
      component: FormInputBinding
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    }
  ]
})
