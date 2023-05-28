import './Card.css'
import { Card as ButCard, Button } from 'react-bootstrap'
import { CardModal } from './CardModal';
import { useState } from 'react'

export const Card = ({name, description, imgSrc }) => {
    const [order, setOrder] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <CardModal description={description} name={name} imgSrc={imgSrc} show={openModal} onHide={() => setOpenModal(false)} />
            <ButCard border="info" style={{ minWidth: '350px'}}> 
                <ButCard.Img   className='ImgCard' variant='top' src={imgSrc ? imgSrc : '/logo192.png'} style={{ width: "50%", margin: 'auto'}}  />
                <ButCard.Body>
                    <ButCard.Title>
                        {name ? name : 'Товар'}
                    </ButCard.Title>
                    <ButCard.Text>
                        {description ? description : 'Описание отсутствует'}
                    </ButCard.Text>
                    <div className='buttons'>
                        <Button size='sm' variant={order ? 'Success' : 'success'} onClick={() => setOrder((prev) => !prev)}>{order ? 'Отменить' : 'Заказать'}</Button>
                        <Button size='sm' variant='light' onClick={() => setOpenModal(true)} >Подробнее</Button>
                    </div>
                </ButCard.Body>
            </ButCard>
        </>
    )
}