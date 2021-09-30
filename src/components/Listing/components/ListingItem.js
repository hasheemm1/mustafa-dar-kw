import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const ListingItem = ({id, source, thumbnail, caption, strapline,price, description, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (<article key={id} className="4u 12u$(xsmall) work-item">
        
            <a
        className="fit thumb"
        href={source}
        onClick={onClick}
        >

        <img src={thumbnail} />
        </a>
        <div className="wrapper">
        <h4>{strapline}</h4>
        <h3>{caption}</h3>
        <h4>{price}</h4>
        </div>
        <a className="bottom" href={source}  onClick={onClick} >More Details &gt;</a>
    </article>)
};

ListingItem.displayName = 'ListingItem'
ListingItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default ListingItem