import { ClipLoader } from 'react-spinners'
import { useLoading } from '../../context/LoadingContext'
import './LoadingOverlay.css'

export function LoadingOverlay() {
    const { loading } = useLoading()

    if (!loading) return null

    return (
        <div className="loading-overlay">
            <ClipLoader size={60} color="#4f46e5" />
        </div>
    )
}
