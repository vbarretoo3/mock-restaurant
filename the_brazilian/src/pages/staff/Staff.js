import React, { useRef, useState } from 'react';
import { Form , Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Staff() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { logIn } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            history("/dashboard")
        }   catch {
            setError('Failed to Sign In') 
        }
        setLoading(false)
    }

    return (
        <>
            <div className="container">
            <h2 className='text-center mb-4'>Log In</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <form className='form-components' onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <label className='form-label' style={{font: "normal 19px DefaultFont"}}>Email</label>
                    <input className='form-input' type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                    <label className='form-label' style={{font: "normal 19px DefaultFont"}}>Password</label>
                    <input className='form-input' type='password' ref={passwordRef} required />
                </Form.Group>
                <br/>
                <button disable={loading} className='button-form' type='submit'>Log In</button>
                <div className='w-100 text-center mt-3'>
                    <Link className='link' to='/forgot-password'>Forgot Password?</Link>
                </div>
            </form>
            </div>
        </>
    )
}
