import styled from "styled-components"

import { appearAnimation } from "../../utils/styledComponentsKeyframes"

export const StyledCategoryItem = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.text};
    padding: 0.25rem;
    position: relative;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: ${({ theme }) => theme.colors.background};
    /* padding: ${({ isSelected }) =>
        isSelected ? "0.25rem 0.75rem" : "0.25rem"}; */
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.text : "transparent"};
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.main : theme.colors.text};
    animation: ${appearAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:active {
        &::before {
            height: 100%;
            opacity: 1;
        }

        span {
            color: ${({ theme }) => theme.colors.background};
        }
    }

    &::before {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colors.main};
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        opacity: 0.1;
        transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        z-index: 1;
    }

    span {
        position: relative;
        z-index: 2;
        transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
`
