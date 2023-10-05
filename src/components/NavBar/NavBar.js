import './Navbar.css'
import CardWidget from "../CardWidget/CardWidget"
import {NavLink,Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to= '/'>
            <h3>Quiero Celulares</h3>
            </Link>
            <div className='Categorias'>
                <NavLink to={`/category/Motorolla`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Motorolla</NavLink>
                <NavLink to={`/category/Samsung`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Samsung</NavLink>
                <NavLink to={`/category/Iphone`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Iphone</NavLink>

            </div>
            <CardWidget/>
        </nav>
    )
}
export default NavBar