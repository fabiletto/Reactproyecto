const products = [
    {
        id:'1',
        name:'Motorolla ',
        price: 150000,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_858094-MLU70795779606_082023-O.webp',
        stock: 25,
        description: 'Decripcion de Iphone 12'
    },
    {
        id:'2',
        name:'Samsung 6',
        price: 100000,
        category: 'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_933648-MLA53352642912_012023-O.webp',
        stock: 20,
        description: 'Decripcion de Iphone 12'
    },
    {
        id:'3',
        name:'Iphone 11',
        price: 201000,
        category: 'celular',
        img:'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp',
        stock: 5,
        description: 'Decripcion de Iphone 12'
    }
]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod =>prod.id === productId))
    },500)
      
} )
}

export const getProductsByCategory = (category) =>{
    return  new Promise  ((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod =>prod.category === category))
},500)
  
} )
}

