import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { StyledForm } from "../components/styles/StyledForm"
import { login, reset } from "../features/auth/authSlice"

import Input from "../components/Input"
import Spinner from "../components/Spinner"

const Login = () => {
    const [formData, setFormData] = useState({
        email: { value: "", isError: false, errorList: [] },
        password: { value: "", isError: false, errorList: [] },
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, errorMessage } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(errorMessage)
        }

        if (isSuccess || user) {
            navigate("/")
        }

        dispatch(reset())
    }, [user, isError, isSuccess, errorMessage, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: {
                value: e.target.value,
                isError: false,
                errorList: [],
            },
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email: email.value,
            password: password.value,
        }

        dispatch(login(userData))
    }

    if (isLoading) return <Spinner />

    return (
        <StyledForm onSubmit={onSubmit}>
            <h2>login</h2>
            <Input
                type="email"
                name="email"
                id="email"
                onChange={onChange}
                value={email.value}
                isError={email.isError}
                errorMessage={email.errorMessage}
            />
            <Input
                type="password"
                name="password"
                id="password"
                onChange={onChange}
                value={password.value}
                isError={password.isError}
                errorMessage={password.errorMessage}
            />
            <button
                type="submit"
                disabled={
                    formData.email.value === "" ||
                    formData.password.value === ""
                }
            >
                login
            </button>
        </StyledForm>
    )
}
export default Login
