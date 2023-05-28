import { Nav } from 'react-bootstrap'

export const LeftMenu = () => {
    return (
        <>
            <h5>Товары</h5>
            <Nav className="flex-column">
                <Nav.Link href="/products#smart">Смартфоны</Nav.Link>
                <Nav.Link href="/products#frost">Холодильники</Nav.Link>
                <Nav.Link href="/products#laptops">Ноутбуки</Nav.Link>
                <Nav.Link href="/products#games">Игры</Nav.Link>
            </Nav>
        </>
    )
}