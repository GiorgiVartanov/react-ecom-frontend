import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { StyledLogin } from "../components/styles/StyledLogin"
import { register, reset } from "../features/auth/authSlice"

import Input from "../components/Input"
import Spinner from "../components/Spinner"

const Register = () => {
    const [formData, setFormData] = useState({
        name: { value: "", isError: false, errorMessage: "" },
        email: { value: "", isError: false, errorMessage: "" },
        password: { value: "", isError: false, errorMessage: "" },
        confirmPassword: { value: "", isError: false, errorMessage: "" },
    })

    const { name, email, password, confirmPassword } = formData

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
                errorMessage: "",
            },
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password.value !== confirmPassword.value) {
            setFormData((prevState) => ({
                ...prevState,
                password: {
                    value: prevState.password.value,
                    isError: true,
                    errorMessage: "passwords do not match",
                },
                confirmPassword: {
                    value: prevState.confirmPassword.value,
                    isError: true,
                    errorMessage: "passwords do not match",
                },
            }))
        } else {
            const userData = {
                name: name.value,
                email: email.value,
                password: password.value,
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) return <Spinner />

    return (
        <StyledLogin onSubmit={onSubmit}>
            <h2>register</h2>
            <Input
                type="text"
                name="name"
                id="name"
                onChange={onChange}
                value={name.value}
                isError={name.isError}
                errorMessage={name.errorMessage}
            />
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
            <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={onChange}
                value={confirmPassword.value}
                isError={confirmPassword.isError}
                errorMessage={confirmPassword.errorMessage}
            />
            <button
                type="submit"
                disabled={
                    formData.name.value === "" ||
                    formData.email.value === "" ||
                    formData.password.value === "" ||
                    formData.confirmPassword.value === ""
                }
            >
                register
            </button>
        </StyledLogin>
    )
}
export default Register
