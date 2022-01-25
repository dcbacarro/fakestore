import React, { useState } from 'react'
import { FormControl, FormLabel, Button, Input } from '@chakra-ui/react'
import './../styles.css'
import Product from './Product'

function Login() {

    const [login, setLogin] = useState(false)
    const [token, setToken] = useState("")
    
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "johnd",
                password: "m38rmF$"
            })
        })
            .then(res=>res.json())
            .then(json=>{
                setToken(json.token)
            })

    const [validUsername, setValidUsername] = useState("")
    const [validPassword, setValidPassword] = useState("")


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    fetch('https://fakestoreapi.com/users/1')
        .then(res => res.json())
        .then(json => {
            setValidUsername(json.username);
            setValidPassword(json.password);
        })

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        if (validUsername == username && validPassword == password) {
            setLogin(true)
        } else {
            alert("Invalid username or password.")
        }
    }

    return (
        <>


            {login ? <Product /> : <FormControl isRequired style={{ width: "30%", margin: "50px auto" }}>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input id='username' placeholder='Username' onChange={handleUsernameChange} />
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input id='password' placeholder='Password' onChange={handlePasswordChange} type="password" />
                <Button colorScheme='green' onClick={handleSubmit}>Log In</Button>
            </FormControl>}
        </>
    );
}

export default Login;
