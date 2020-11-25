import React, { useState } from 'react';

import PageHeader from '../../template/PageHeader';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
    return(
        <div>
            <PageHeader name='Tarefas' small='Cadastro'/>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default Todo;