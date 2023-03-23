import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       
      
      </header>
    </div>
  );
}
localStorage.setItem('todo', 'TodoList'); 


const todo = localStorage.getItem('todo');

console.log(todo); 


localStorage.removeItem('todo');

export default App;
