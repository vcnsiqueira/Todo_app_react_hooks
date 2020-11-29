import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid/Grid';
import IconButton from '../IconButton/IconButton';

const TodoForm = ({ addElement, description, handleChange, searchElement, cleanForm }) => {

    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? searchElement() : addElement()
        } else if (e.key === 'Escape') {
            cleanForm()
        }
    }

    return(
        <div className='d-flex'>
            <Grid cols='12 9 10'>
                <input className='form-control' placeholder='Adicione uma tarefa' value={description} onChange={handleChange} onKeyUp={keyHandler}/>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton buttonStyle='primary' icon='plus' onClick={addElement}/>
                <IconButton buttonStyle='info' icon='search' onClick={searchElement}/>
                <IconButton buttonStyle='secondary' icon='times' onClick={cleanForm}/>
            </Grid>
        </div>
    );
};

TodoForm.propTypes = {
    addElement: PropTypes.func,
    description: PropTypes.string,
    handleChange: PropTypes.func,
    searchElement: PropTypes.func,
    cleanForm: PropTypes.func,
};

export default TodoForm;