import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid/Grid';
import IconButton from '../IconButton/IconButton';

const TodoForm = ({ addElement, description, handleChange }) => {

    return(
        <div class='d-flex'>
            <Grid cols='12 9 10'>
                <input className='form-control' placeholder='Adicione uma tarefa' value={description} onChange={handleChange}/>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={addElement}/>
            </Grid>
        </div>
    );
};

TodoForm.propTypes = {
    addElement: PropTypes.func,
    description: PropTypes.string,
    handleChange: PropTypes.func,
};

export default TodoForm;