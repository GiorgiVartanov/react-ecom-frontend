import { StyledInput } from "./styles/StyledInput"

const Input = ({ type, name, id, onChange, value, isError, errorMessage }) => {
    return (
        <>
            <StyledInput
                isError={isError}
                type={type}
                name={name}
                id={id}
                placeholder={name}
                onChange={onChange}
                value={value}
            />
            {isError ? <span>{errorMessage}</span> : ""}
        </>
    )
}
export default Input
