import React, {useReducer, useCallback} from 'react'
import {v4 as uuidv4} from 'uuid'
//others
import * as types from './types'
import initialState from './initialState'
//context
import grudgeReducer from './GrudgeReducer'
import {GrudgeContext} from './GrudgeContext'

export const GrudgeProvider = ({children}) => {
 const [grudges, dispatch] = useReducer(grudgeReducer, initialState.grudges)

 const addGrudge = useCallback(
  ({person, reason}) => {
   dispatch({
    type: types.GRUDGE_ADD,
    payload: {person, reason, forgiven: true, id: uuidv4()},
   })
  },
  [dispatch]
 )
 const toggleForgivness = useCallback(
  (id) => {
   dispatch({
    type: types.TOGGLE_FORGIVNESS,
    payload: {id},
   })
  },
  [dispatch]
 )

 const value = {grudges, addGrudge, toggleForgivness}

 return (
  // <GrudgeContext.Provider value={{grudges}}>{children}</GrudgeContext.Provider>
  <GrudgeContext.Provider value={value}>{children}</GrudgeContext.Provider>
 )
}
