import { StyledInput } from "./styles/StyledInput"

const Input = ({ name, register, id, errors, placeholder, type }) => {
    return (
        <StyledInput htmlFor={id}>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
            {errors && errors[name] ? <span>{errors[name]?.message}</span> : ""}
        </StyledInput>
    )
}
export default Input
