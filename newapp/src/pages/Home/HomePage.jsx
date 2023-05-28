import './HomePage.css'
import Carousel from 'react-bootstrap/Carousel';
export const HomePage = () => {
    return (
        <>
            <h5 className='presentation'>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://zn.ua/img/forall/u/0/-1/users/Jun2019/233430.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-black'>Первый онлайн-магазин на этой платформе!</h3>
          <p className='text-black'>Лучшие цены!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.dzeninfra.ru/get-zen_doc/3842094/pub_5f3cdb90673058256b9df883_5f434e55a465d87826576bed/scale_1200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Осуществляем ремонт</h3>
          <p> компьютерной техники</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://resizer.mail.ru/p/068e6022-4ea1-5755-a9ec-156d43768c64/AQAK8hL0MXgGy3_edeJOQahZmi3arOIclnte8hUxv_Y5qjDKDmYDFy37Sgyax77nvJj9Za9uBM6KQOZbT8sGZ-a4v2Q.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </h5>
        </>
        
        
    )
}