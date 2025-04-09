import React from 'react';
import { useTodoStore } from '../store/todoStore';
import styled from 'styled-components';
import { FaTrashAlt, FaCheckCircle, FaCircle } from 'react-icons/fa';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <TodoContainer>
      <TodoCheckbox
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <TodoText completed={completed}>{text}</TodoText>
      <DeleteButton onClick={() => deleteTodo(id)}>
        <FaTrashAlt />
      </DeleteButton>
    </TodoContainer>
  );
};

export default TodoItem;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const TodoCheckbox = styled.input`
  margin-right: 10px;
`;

const TodoText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#aaa' : '#333')};
`;

const DeleteButton = styled.button`
  background-color: transparent;
  color: #ff4d4d;
  border: none;
  cursor: pointer;
  font-size: 18px;
  
  &:hover {
    color: #e44d4d;
  }
`;