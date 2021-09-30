import React from 'react'
import PropTypes from 'prop-types'

import ServiceItem from './ServiceItem'
import { DATA } from '../constants/data'

const Service = ({ services = DATA }) => {
 


  return (
    <div>
      {services && (<div className="row">
        {services.map((obj, i) => {
        return (<ServiceItem
          id={obj.id}
          source={obj.source}
          thumbnail={obj.thumbnail}
          caption={obj.caption}
          description={obj.description}
          position={i}
         
        />); 
        })}
        </div>
      )}
     
    </div>
  )
}

Service.displayName = 'Service'
Service.propTypes = {
  images: PropTypes.array,
}

export default Service
