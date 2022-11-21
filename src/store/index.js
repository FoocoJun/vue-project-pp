import { createStore } from 'vuex'
import openWeatherApi from './openWeatherApi'

// Vuex Store의 Mutations를 실행할 때는 commit() 메서드를
// Vuex Store의 Actions를 실행할 때는 dispatch() 메서드를 사용한다.

export default createStore({
  // store의 모듈화, 추후 this.$store.dispatch('openWeatherApi/액션이름')으로 호출
  modules: { openWeatherApi },
  // state: 실제로 취급해야하는 상태
  state: {
    count: 0
  },
  // getters: 계산된 상태의 데이터를 만들어내는 속성
  // computed와 비슷한 기능
  getters: {},

  // mutations, actions: methods와 유사한 기능을 가지고 있다.
  // 1. mutations: 변이 메서드, 우리가 관리하는 데이터(state)를 변경시켜줄 수 있다.
  // 즉, state 안의 데이터는 오로지 mutations에서만 데이터를 변경시킬 수 있다.
  mutations: {
    increment(state) {
      state.count++
      console.log('증가', state.count)
    },
    decrement(state) {
      state.count--
      console.log('감소', state.count)
    }
  },
  // 2. actions: 특정한 데이터를 직접적으로 수정하는 것이 허용되지 않음을 주의하자.
  // 비동기로 동작한다.
  // actions 부분에선 mutations처럼 state를 바로 불러올 순 없다.
  // context라는 객체데이터를 호출하여 context를 참조하여 데이터를 불러온다.
  // context 내부에는 state, getters, mutations를 활용할 수 있는 내용이 들어있다.
  // mutations를 호출하기 위해서는 context.mutations가 아니라 context.commit('뮤테이션 이름',payload) 형식으로 호출한다.
  // 객체 구조분해하여 불러올 수 있다.
  actions: {}
})
