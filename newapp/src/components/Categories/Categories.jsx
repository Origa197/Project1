import { Row, Col, Alert } from 'react-bootstrap'
import { Card } from '../Card/Card'

export const Categoies = ({categoryName, ordersArray}) => {
    return (
        <>
            <h5>{categoryName}</h5>
            <Row className='home'>
                {Array.isArray(ordersArray) ? ordersArray.map(({description, name, imgSrc}) => (
                    <Col>
                        <Card description={description} name={name} imgSrc={imgSrc} />
                    </Col>
                )) :
                (
                    <Alert>
                        Товары в данной категории отсутствуют
                    </Alert>
                )
            }
            </Row>
        </>
    )
}