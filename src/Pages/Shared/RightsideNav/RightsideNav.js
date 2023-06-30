import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Brandcurousels from '../Brandcurousels/Brandcurousels';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RightsideNav = () => {
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const handlegooglesign = () => {
       providerLogin(googleProvider)
       .then(result => {
         const user = result.user;
         console.log(user);
         navigate('/')
       })
       .catch(error => console.error(error));
    }
    return (
        <div className='mt-4'>
            <ButtonGroup vertical className='w-100'>
                <Button className='mb-2 border' onClick={handlegooglesign} variant="outline-secondary"> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-info"> <FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find Us</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube/> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Brandcurousels></Brandcurousels>
            </div>
        </div>
    );
};

export default RightsideNav;