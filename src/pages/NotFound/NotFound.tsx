import { Link, useLocation } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
    const location = useLocation()

    const isForbidden = location.pathname === '/forbidden'

    return (
        <div className="notfound-container">
            <div className="notfound-box">
                <h1>{isForbidden ? '403' : '404'}</h1>

                <h2>
                    {isForbidden
                        ? 'Acesso negado'
                        : 'Página não encontrada'}
                </h2>

                <p>
                    {isForbidden
                        ? 'Você não tem permissão para acessar esta página.'
                        : 'A rota que você tentou acessar não existe.'}
                </p>

                <Link to="/" className="button">
                    Voltar
                </Link>
            </div>
        </div>
    )
}
