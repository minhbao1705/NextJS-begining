'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';

const facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push('/')
    }
    return (
        <div>
            Facebook page
            <div>
                <Button variant='primary' onClick={() => handleBtn()}>Hỏi Dân IT</Button>
                <button onClick={() => handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default facebook;