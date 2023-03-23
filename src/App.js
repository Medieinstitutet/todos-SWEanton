import './App.css';
import React, { useStatel, useEffect } from 'react';

function TodoList() {
  const [ToDo, SetToDolist] = useState([]);

useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      setTodos(['Duscha', 'Träna', 'Äta', 'Sova', 'Spela']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
}
localStorage.setItem('todo', 'TodoList'); 


const todo = localStorage.getItem('todo');

console.log(todo); 


localStorage.removeItem('todo');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}
export default App;
