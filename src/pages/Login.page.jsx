import { useState } from "react"

import { StyledLogin } from "../components/styles/StyledLogin"

import Input from "../components/Input"

const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <StyledLogin onSubmit={onSubmit}>
            <h2>login</h2>
            <Input
                type="email"
                name="email"
                id="email"
            />
            <Input
                type="password"
                name="password"
                id="password"
            />
            <button type="submit">login</button>
        </StyledLogin>
    )
}
export default Login
