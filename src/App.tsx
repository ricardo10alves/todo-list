import React, { useState } from 'react';
import { useTodoStore } from './store/todoStore';
import TodoItem from './components/TodoItem';
import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <AppContainer>
      <Header>Todo List</Header>
      <InputContainer>
        <TodoInput
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <AddButton onClick={handleAddTodo}>
          <FaPlusCircle />
          Add
        </AddButton>
      </InputContainer>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </TodoList>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TodoInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #45a049;
  }
`;

const TodoList = styled.div`
  margin-top: 20px;
`;