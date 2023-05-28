import { Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <>
            <Alert variant="danger" dismissible>
        <Alert.Heading>ОШИБКА 404</Alert.Heading>
        <p>
                <div>Страница не найдена</div>
                <Link to={'/'} >Вернуться на главную страницу</Link>
        </p>
      </Alert>
        </>
    )
}