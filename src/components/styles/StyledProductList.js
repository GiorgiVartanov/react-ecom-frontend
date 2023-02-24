import styled from "styled-components"

export const StyledProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 250px);
    gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: ${({ theme }) => theme.sizes.large}) {
        grid-template-columns: repeat(3, 250px);
    }
    @media screen and (max-width: ${({ theme }) => theme.sizes.medium}) {
        grid-template-columns: repeat(2, 250px);
    }
    @media screen and (max-width: ${({ theme }) => theme.sizes.small}) {
        grid-template-columns: repeat(1, 250px);
    }
`
