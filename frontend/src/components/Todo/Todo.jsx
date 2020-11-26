import React, { useState } from 'react';
import axios from 'axios';

import PageHeader from '../../template/PageHeader';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const URL = 'http://localhost:3003/api/todos';

const Todo = () => {

    const [description, setDescription] = useState('');
    const [list, setList] = useState([]);

    const handleChange = event => {
        setDescription(event.target.value);
    };

    const handleAdd = () => {
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    }

    return(
        <div>
            <PageHeader name='Tarefas' small='Cadastro'/>
            <TodoForm addElement={handleAdd} description={description} handleChange={handleChange}/>
            <TodoList/>
        </div>
    );
};

export default Todo;