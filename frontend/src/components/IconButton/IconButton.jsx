import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ buttonStyle, icon, onClick, hide }) => {
    
    const buttonClass = `btn btn-${buttonStyle}`;
    const iconClass = `fas fa-${icon}`
    
    if (hide) {
        return null
    } else{
        return (
            <button className={buttonClass} onClick={onClick}>
                <i className={iconClass}/>
            </button>        
        );
    }
};

IconButton.defaultProps = {
    hide: false,
};

IconButton.propTypes = {
    buttonStyle: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    hide: PropTypes.bool,
};

export default IconButton;