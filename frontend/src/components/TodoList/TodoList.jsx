import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';

const TodoList = ({ list, removeElement }) => {
    
    const renderRows = () => {
        const newList = list || [];
        return(
            newList.map(todo => (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td><IconButton buttonStyle='danger' icon='trash-alt' onClick={() => removeElement(todo)}/></td>
                </tr>
            ))
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

TodoList.propTypes = {
    list: PropTypes.array,
    removeElement: PropTypes.func,
};

export default TodoList;