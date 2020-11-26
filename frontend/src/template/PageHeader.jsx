import React from 'react';
import './PageHeader.css';
import PropTypes from 'prop-types';

const PageHeader = ({ name, small }) => {
    return(
        <div className='page_header'>
            <h2>{name} <small>{small}</small></h2>
        </div>
    );
}

PageHeader.propTypes = {
    name: PropTypes.string,
    small: PropTypes.string,
};


export default PageHeader;