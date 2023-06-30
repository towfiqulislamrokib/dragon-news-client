import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState();
    const [accepted, setaccepted] = useState();
    const {createUser, updateuser, verifyEmail} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
       createUser(email, password)
       .then( result => {
           const user = result.user;
           console.log(user);
           setError('')
           form.reset();
           handleuserupdateprofile(name, photoURL);
           handleEmailverify();
           toast.success('please verify your email address before login')
       })
       .catch(error => {
        console.error(error)
        setError(error.message)
    })
    }

    const handleaccepted = event => {
          setaccepted(event.target.checked)
    }
    const handleuserupdateprofile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateuser(profile)
        .then( () => {})
        .catch( error => console.error(error))
    }
    const handleEmailverify = () => {
        verifyEmail()
        .then( () => {})
        .catch( error => console.error(error))
    }
    return (
        <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photoURL" placeholder="photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="email"  required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                 onClick={handleaccepted}
                 type="checkbox"
                 label={<>Accept <Link to='/terms'>terms and Conditions</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
              Register
            </Button>
            <p className="text-danger">
                Already have a account? <Link className='text-decoration-none' to='/login'>Login</Link>
            </p>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;