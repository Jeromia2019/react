import style from './products-list.module.css'

const ProductsList = ({produits}) => {

    return(
        <>
        <h2 className={style}>Liste de produits</h2>
        <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <ProductList productsList={produits} />
            </table>
        </>
    )
}

const ProductList = ({productsList}) => {

    const productsJSX = productsList.map(
        p => < ProductsListDisplay {...p}/>
    )

    return(
        <tbody>
            {productsJSX}
        </tbody>
    )
}

const ProductsListDisplay = ({name, price, promo}) => {

    const priceEuro = price.toLocaleString(
        'fr-BE', 
        {
            style: "currency", currency: "EUR" 
        }
        );

    return (

    <tr>
        <td>{name}</td>
        <td>{priceEuro}</td>
        <td className={style.promo}>{promo === true ? "promo !" : ""}</td>
    </tr>
    )

    }

export default ProductsList;