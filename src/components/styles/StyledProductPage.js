import styled from "styled-components"

import { appearAnimation } from "../../utils/styledComponentsKeyframes"

export const StyledProductPage = styled.div`
    width: calc(100% - 1rem);
    max-width: calc(1000px + 1.5rem);
    margin: 2rem auto;
    gap: 1rem;
    animation: ${appearAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    display: flex;
    flex-direction: row;

    .product-text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1rem 0;
    }
    img {
        /* max-width: 420px; */
        /* width: 100%; */
        max-width: 420px;
        width: 100%;
    }

    @media screen and (max-width: ${({ theme }) => theme.sizes.medium}) {
        flex-direction: column;

        img {
            width: 100%;
            margin: auto;
        }
    }
`
