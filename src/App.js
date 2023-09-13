
import './App.css';
import itemListContainer from './components/itemListContainer/itemListContainer';
import NavBar from './components/NavBar/NavBar';


function App () {
    return (
        <div className='App'>
        <NavBar/>
        <itemListContainer greeting = {'Bienvenidos'}/>
        </div>
    );
}

export default App;