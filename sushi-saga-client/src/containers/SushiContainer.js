import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
 
  return (
    <Fragment>
      <div className="belt">
      
        
          {props.sushi.map( s => (
            <Sushi key={s.id} {...s} eat={props.eat}/>
          ))}
          
        
        <MoreButton more={() => props.more(props.sushi[props.sushi.length-1].id)}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer