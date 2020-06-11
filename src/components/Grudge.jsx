import React, {useContext} from 'react'
import {GrudgeContext} from '../context/GrudgeContext'

const Grudge = React.memo(({grudge}) => {
 const {toggleForgivness} = useContext(GrudgeContext)
 const forgive = () => toggleForgivness(grudge.id)

 console.log('rendering grudge')
 return (
  <article className="Grudge">
   <h3>{grudge.person}</h3>
   <p>{grudge.reason}</p>
   <div className="Grudge-controls">
    <label className="Grudge-forgiven">
     <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
     Forgiven
    </label>
   </div>
  </article>
 )
})

export default Grudge
