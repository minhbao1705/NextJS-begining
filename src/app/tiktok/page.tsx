'use client'
import { useRouter } from 'next/navigation'

const tiktok = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (
        <div>
            TikTok page
            <div>
                <button onClick={() => handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default tiktok;