import styled from "styled-components"

export const StyledInput = styled.label`
    input {
        outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
        border: none;
        padding: 0.25rem 0.5rem;
        font-family: inherit;
        width: 100%;
        margin-bottom: 0.5rem;

        &:focus {
            outline: 1px solid ${({ theme }) => theme.colors.main};
            /* box-shadow: 0 0 4px 1px ${({ theme }) => theme.colors.main}; */
        }
    }
`
