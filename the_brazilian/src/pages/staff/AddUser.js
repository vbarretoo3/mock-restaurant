import React, { useRef, useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history('/dashboard')
        }   catch {
            setError('Failed to create an account') 
        }
        setLoading(false)
    }

    return (
      <>
        <div className="container">
            <h2>Create User</h2>
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
                <Form.Group id='passwordConfirm'>
                    <label className='form-label' style={{font: "normal 19px DefaultFont"}}>Password Confirmation</label>
                    <input className='form-input' type='password' ref={passwordConfirmRef} required />
                </Form.Group>
                <br/>
                <button disable={loading} className='button-form' type='submit'>Sign Up</button>
            </form>
        </div>
      </>
  )
}
