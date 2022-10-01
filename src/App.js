import './App.css';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Task from './Components/Task';
import ListContextProvider from './Context/ListContext';

function App() {
  return (
    <ListContextProvider>
    <div className="App">
      <Header/>
      <Task/>
      <AddTask/>
    </div>
    </ListContextProvider>

  );
}

export default App;
