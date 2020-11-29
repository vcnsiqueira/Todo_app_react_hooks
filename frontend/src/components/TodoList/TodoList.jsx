import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

import IconButton from '../IconButton/IconButton';

const TodoList = ({ list, removeElement, doneTask, pendingTask }) => {
    
    const renderRows = () => {
        const newList = list || [];
        return(
            newList.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                        <IconButton buttonStyle='success' icon='check' hide={todo.done} onClick={() => doneTask(todo)}/>
                        <IconButton buttonStyle='warning' icon='undo' hide={!todo.done} onClick={() => pendingTask(todo)}/>
                        <IconButton buttonStyle='danger' icon='trash-alt' onClick={() => removeElement(todo)}/>
                    </td>
                </tr>
            ))
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
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
    doneTask: PropTypes.func,
    pendingTask: PropTypes.func,
};

export default TodoList;