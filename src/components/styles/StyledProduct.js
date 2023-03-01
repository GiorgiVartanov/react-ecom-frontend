import styled from "styled-components"

import {
    expandAnimation,
    appearAnimation,
} from "../../utils/styledComponentsKeyframes"

export const StyledProduct = styled.li`
    outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    /* backdrop-filter: ${({ isActive, theme }) =>
        isActive ? "blur(80%)" : ""} !important; */

    cursor: pointer;

    animation: ${appearAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        &::before {
            height: 100%;
            opacity: 0.1;
        }
    }

    &::before {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colors.mainSecondary};
        height: ${({ isActive }) => (isActive ? "100%" : "")} !important;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        opacity: ${({ isActive }) => (isActive ? "0.2" : "0.1")} !important;
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

        .product-buttons {
            display: flex;
            flex-direction: row;
            gap: 0.25rem;
            justify-content: center;
            position: absolute;
            top: 40%;
            right: 50%;
            transform: translateX(50%);
            border: 1px solid ${({ theme }) => theme.colors.mainSecondary};
            padding: 0.25rem 0.5rem;
            background-color: ${({ theme }) =>
                theme.colors.backgroundSecondary};
            opacity: 0.8;
            height: fit-content;
            backdrop-filter: blur(10px);

            li {
                height: 2rem;

                button {
                    height: 2rem;
                    width: 2rem;
                    /* padding: 0.25rem; */
                }
            }
        }
    }

    .product-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: auto;
        justify-content: space-between;
        outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
        height: 70px;
        position: relative;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};

        h2 {
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
            padding: 0.25rem;
            margin: auto;
        }

        .price {
            padding: 0 0.25rem;
            white-space: nowrap;
            position: absolute;
            top: -1rem;
            outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
            color: ${({ theme }) => theme.colors.mainSecondary};
            background-color: ${({ theme }) => theme.colors.main};
        }
    }

    button {
        background-color: transparent;
        border: none;
    }
`
