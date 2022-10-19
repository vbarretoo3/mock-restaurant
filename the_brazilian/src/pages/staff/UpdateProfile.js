import React, { useRef, useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, changePassword, changeEmail } = useAuth()
    const [error, setError] = useState('')
    const history = useNavigate()
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault() 
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            if (emailRef.current.value !== currentUser.email) {
                await changeEmail(emailRef.current.value)
            }
            if (passwordRef.current.value) {
                await changePassword(passwordRef.current.value)
            }
            history('/')
        } catch {
            setError('Failed to update account')
        }
        setLoading(false)
    }

    return (
        <>
          <div className="container">
            <h2>Update Profile</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <form className='form-components' onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <label className='form-label'>Email</label>
                    <input className='form-input' type='email' ref={emailRef} required defaultValue={currentUser.emailRef}/>
                </Form.Group>
                <Form.Group id='password'>
                    <label className='form-label'>Password</label>
                    <input className='form-input' type='password' ref={passwordRef} placeholder='Leave blank to keep the same'/>
                </Form.Group>
                <Form.Group id='passwordConfirm'>
                    <label className='form-label'>Password Confirmation</label>
                    <input className='form-input' type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same'/>
                </Form.Group>
                <br/>
                <button disable={loading} className='button-form' type='submit'>Update Profile</button>
            </form>
            <div style={{justifycontent: 'center'}}>
                <a className='link' href='/dashboard'>Cancel</a>
            </div>
          </div>
        </>
    )
}
