import React, { useRef, useState} from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();;

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        }   catch {
            setError('Failed to reset password') 
        }
        setLoading(false)
    }

    return (
        <>
            <div className="container">
                <h2 className='text-center mb-4'>Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <form className='form-components' onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <label className='form-label'>Email</label>
                        <input className='form-input' type='email' ref={emailRef} required />
                    </Form.Group>
                    <br/>
                    <button disable={loading} className='button-form' type='submit'>Reset Password</button>
                    <div className='w-100 text-center mt-3'>
                        <Link className='link' to='/login'>Log In</Link>
                    </div>
                </form>
            </div>
        </>
  )
}
