import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { getProducts, getProducts } from '../asyncMock'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
 
const Item= ({id, name, img, price, stock}) => {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='Itemheader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'></img>
            </picture>
            <section>
                <p className='Info'>
                   Categoria: {getProducts}
                </p>                                                                
                <p className='Info'>
                   Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio:${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1}stock={stock}onAdd={(quantity) => console.log('Cantidad agregada')}/>
            </footer>
        </article>
    )
}
export default ItemDetail