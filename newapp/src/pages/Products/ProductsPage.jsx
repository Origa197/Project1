import { laptops, frost, smart, games } from '../../orders'
import { useLocation } from 'react-router-dom'
import { Categoies } from '../../components/Categories/Categories'

export const ProductsPage = () => {
    const { hash } = useLocation()

    return (
        <>
            <h5>Товары</h5>
            <p></p>
            {hash !== '' ? (
                <>
                    {hash === '#smart' && <Categoies categoryName={'Смартфоны'} ordersArray={smart} />}
                    {hash === '#frost' && <Categoies categoryName={'Холодильники'} ordersArray={frost} />}
                    {hash === '#laptops' && <Categoies categoryName={'Ноутбуки'} ordersArray={laptops} />}
                    {hash === '#games' && <Categoies categoryName={'Игры'} ordersArray={games} />}
                </>
            ) : (
                <>
                    <Categoies categoryName={'Смартфоны'} ordersArray={smart} />
                    <Categoies categoryName={'Холодильники'} ordersArray={frost} />
                    <Categoies categoryName={'Ноутбуки'} ordersArray={laptops} />
                    <Categoies categoryName={'Игры'} ordersArray={games} />
                    <Categoies categoryName={'Прочее'} />
                </>
            )}
        </>
    )
}