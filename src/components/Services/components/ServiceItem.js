import React from 'react'
import PropTypes from 'prop-types'

const ServiceItem = ({id, source, thumbnail, caption, description}) => {

  

    return (<article key={id} className="4u 12u$(small) service-item">
        <a
        className="image fit thumb"
        href={source}
       
        >
        <img src={thumbnail} />
        </a>
        <h3>{caption}</h3>
        <p>{description}</p>
    </article>)
};

ServiceItem.displayName = 'ServiceItem'
ServiceItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  
}

export default ServiceItem