
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import itemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App () {
    return (
        <div className='App'>
            <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<itemListContainer/>}/>
            <Route path='/category/:categoryId' element={<itemListContainer/>}/>
            <Route path='/item/:itemId' element={<itemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </BrowserRouter>
        
        </div>
    );
}

export default App;