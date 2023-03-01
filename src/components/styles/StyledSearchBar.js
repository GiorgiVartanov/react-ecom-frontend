import styled from "styled-components"

export const StyledSearchBar = styled.input`
    margin: auto;
    display: block;
    margin-top: 2rem;
    border: none;
    outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
    color: ${({ theme }) => theme.colors.mainSecondary};
    padding: 0.25rem 0.75rem;
    max-width: 320px;
    width: 100%;
`
