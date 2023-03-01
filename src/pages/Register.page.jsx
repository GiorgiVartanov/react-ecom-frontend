import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { StyledForm } from "../components/styles/StyledForm"
import { register, reset } from "../features/auth/authSlice"

import Input from "../components/Input"
import Spinner from "../components/Spinner"

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const schema = yup.object().shape({
        name: yup.string().max(30).required(),
        email: yup.string().email("please enter valid email").required(),
        password: yup
            .string()
            .min(8, "password too short")
            .max(30, "password to long")
            .required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "passwords don't match")
            .required(),
    })

    const {
        register: registerUser,
        handleSubmit,
        reset: resetUser,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

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
    }, [user, isError, isSuccess, errorMessage, navigate, dispatch, reset])

    const onSubmit = async (data) => {
        dispatch(register(data))

        resetUser()
    }

    if (isLoading) return <Spinner />

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h2>register</h2>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                errors={errors}
                register={registerUser}
            />
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                errors={errors}
                register={registerUser}
            />
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                errors={errors}
                register={registerUser}
            />
            <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                errors={errors}
                register={registerUser}
            />
            <button
                type="submit"
                // disabled={
                //     formData.name.value === "" ||
                //     formData.email.value === "" ||
                //     formData.password.value === "" ||
                //     formData.confirmPassword.value === ""
                // }
            >
                register
            </button>
        </StyledForm>
    )
}
export default Register
