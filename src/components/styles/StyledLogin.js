import styled from "styled-components"

import { appearAnimation } from "../../utils/styledComponentsKeyframes"

export const StyledLogin = styled.form`
    margin: 6rem auto;
    width: calc(100% - 1rem);
    max-width: 360px;
    padding: 0.5rem;
    outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
    animation: ${appearAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    position: relative;
    z-index: 1;

    h2 {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors.mainSecondary};
        margin-bottom: 0.5rem;
    }

    button {
        width: 100%;
        padding: 0.25rem 0;
        border: none;
        outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
        background-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.mainSecondary};
        font-weight: 500;
        transition: 0.1s ease-in;
        position: relative;

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
            background-color: ${({ theme }) => theme.colors.mainSecondary};
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            opacity: 0.1;
            transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 2;
        }
    }

    button[disabled] {
        /* background-color: ${({ theme }) => theme.colors.mainDimmed}; */
        color: ${({ theme }) => theme.colors.mainSecondary};
        opacity: 0.7;

        &:hover,
        &:active {
            &::before {
                height: 0;
            }
        }
    }
`
