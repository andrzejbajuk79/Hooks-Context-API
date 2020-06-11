import * as types from './types'

export default function (state, action) {
 const {type, payload} = action
 switch (type) {
  case types.GRUDGE_ADD:
   return [payload, ...state]
  case types.TOGGLE_FORGIVNESS:
   return state.map((item) => {
    if (item.id !== payload.id) return item
    return {...item, forgiven: !item.forgiven}
   })

  default:
   return state
 }
}
