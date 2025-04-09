import {create} from 'zustand';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set: (arg0: { (state: any): { todos: any[]; }; (state: any): { todos: any; }; (state: any): { todos: any; }; }) => any) => ({
  todos: [],
  addTodo: (text: any) =>
    set((state: { todos: any; }) => ({
      todos: [
        ...state.todos,
        { id: Date.now(), text, completed: false },
      ],
    })),
  toggleTodo: (id: any) =>
    set((state: { todos: any[]; }) => ({
      todos: state.todos.map((todo: { id: any; completed: any; }) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id: any) =>
    set((state: { todos: any[]; }) => ({
      todos: state.todos.filter((todo: { id: any; }) => todo.id !== id),
    })),
}));