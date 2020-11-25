import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ name, small }) => {
    return(
        <header className="page-header">
            <h2>{name} <small>{small}</small></h2>
        </header>
    );
}

PageHeader.propTypes = {
    name: PropTypes.string,
    small: PropTypes.string,
};


export default PageHeader;