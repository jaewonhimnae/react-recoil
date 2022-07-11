import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemCreator from './components/TodoItemCreator';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { filteredTodoListState, todoListState } from './TodoAtoms';
import { currentUserNameQuery } from './UserAtoms';

function App() {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="App">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}

      <Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo />
      </Suspense>
    </div>
  );
}

export default App;


function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}