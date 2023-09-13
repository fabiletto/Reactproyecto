import CardWidget from "../CardWidget/CardWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Quiero Celulares</h3>
            <div>
                <button>Motorolla</button>
                <button>Samsung</button>
                <button>Iphone</button>
            </div>
            <CardWidget/>
        </nav>
    )
}
export default NavBar