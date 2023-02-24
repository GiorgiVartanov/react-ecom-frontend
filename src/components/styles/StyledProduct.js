import styled from "styled-components"

import {
    expandAnimation,
    appearAnimation,
} from "../../utils/styledComponentsKeyframes"

export const StyledProduct = styled.li`
    outline: 1px solid ${({ theme }) => theme.colors.text};
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    animation: ${appearAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:active {
        &::before {
            height: 100%;
            opacity: 0.1;
        }
    }

    &::before {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colors.text};
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        opacity: 0.1;
        transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
    }

    .image {
        background-image: url(${(image) => image.image});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        height: 300px;
        width: 200px;
        margin: 0.5rem auto;
        transition: 0.2s ease-in;
    }

    .product-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: auto;
        justify-content: space-between;
        outline: 1px solid ${({ theme }) => theme.colors.text};
        height: 70px;
        position: relative;
        /* background-color: ${({ theme }) => theme.colors.main}; */

        h2 {
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
            padding: 0.25rem;
            margin: auto;
        }

        .price {
            padding: 0 0.25rem 0 0.75rem;
            white-space: nowrap;
            position: absolute;
            top: -1rem;
            outline: 1px solid ${({ theme }) => theme.colors.text};
            color: ${({ theme }) => theme.colors.text};
            background-color: ${({ theme }) => theme.colors.main};
        }
    }
`
