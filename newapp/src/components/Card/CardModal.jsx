import { Modal, Button, Row, Col } from 'react-bootstrap'
import './CardModal.css'

export const CardModal = ({name, description, imgSrc, show, onHide}) => {
    return (
        <Modal show={show} onHide={onHide} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{name ? name : 'Описание отсутствует'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img alt={name} src={imgSrc ? imgSrc : '/logo192.png'} className='card-img' />
                    </Col>
                    <Col>
                        <p>Описание товара:</p>
                        <p>{description ? description : 'отсутствует'}</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}