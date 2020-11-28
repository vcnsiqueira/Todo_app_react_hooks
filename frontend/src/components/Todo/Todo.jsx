import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PageHeader from '../../template/PageHeader';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const URL = 'http://localhost:3003/api/todos';

const Todo = () => {

    const [description, setDescription] = useState('');
    const [list, setList] = useState([]);

    const refresh = () => {  // this method sets the description to a empty string and set the list of elements to the list (ordered decreasingly)
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => {
                setDescription('');
                setList(resp.data);
                console.log(resp.data);
            });
    };

    useEffect(() => {
        refresh()
    }, []);
    
    const handleChange = event => {
        setDescription(event.target.value);
    };

    const handleAdd = () => { // this method adds a new element to the database and refreshs the list of elements
        axios.post(URL, { description })
            .then(resp => refresh());
    }

    const handleRemove = (todo) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => refresh());
    };

    return(
        <div>
            <PageHeader name='Tarefas' small='Cadastro'/>
            <TodoForm addElement={handleAdd} description={description} handleChange={handleChange}/>
            <TodoList list={list} removeElement={handleRemove}/>
        </div>
    );
};

export default Todo;