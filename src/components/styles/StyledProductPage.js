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
        gap: 0.5rem;
        margin: 1rem 0;

        h2 {
            padding: 0 0.25rem;
        }

        p {
            border-top: 1px solid ${({ theme }) => theme.colors.mainSecondary};
            padding: 0.25rem;
        }
    }
    img {
        /* max-width: 420px; */
        /* width: 100%; */
        max-width: 420px;
        width: 100%;
    }

    @media screen and (max-width: ${({ theme }) => theme.sizes.medium}) {
        flex-direction: column;

        .product-text {
            h2 {
                text-align: center;
            }

            p {
                text-align: center;
            }
        }

        img {
            width: 100%;
            margin: auto;
        }
    }
`
