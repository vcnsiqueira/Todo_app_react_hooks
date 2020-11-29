import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PageHeader from '../../template/PageHeader';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const URL = 'http://localhost:3003/api/todos';

const Todo = () => {

    const [description, setDescription] = useState('');
    const [list, setList] = useState([]);

    const refresh = (description = '') => {  // this method sets the description to a empty string and set the list of elements to the list (ordered decreasingly)
        const search = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => {
                setDescription(description);
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
    };

    const handleRemove = (todo) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => refresh(description));
    };

    const handleTaskAsDone = (todo) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => refresh(description));
    };

    const handleTaskAsPending = (todo) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => refresh(description));
    };

    const handleSearch = (element) => {
        refresh(description);
    };

    const handleClear = () => {
        console.log('limpe')
        refresh();
    };

    return(
        <div>
            <PageHeader name='Tarefas' small='Cadastro'/>
            <TodoForm 
                description={description}
                addElement={handleAdd} 
                handleChange={handleChange}
                searchElement={handleSearch}
                cleanForm={handleClear}
            />
            <TodoList 
                list={list} 
                removeElement={handleRemove}
                doneTask={handleTaskAsDone}
                pendingTask={handleTaskAsPending}
            />
        </div>
    );
};

export default Todo;