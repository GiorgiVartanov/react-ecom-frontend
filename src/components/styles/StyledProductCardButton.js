import styled from "styled-components"

import { appearAnimation } from "../../utils/styledComponentsKeyframes"

export const StyledProductCardButton = styled.li`
    animation: ${appearAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    button,
    a {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        display: block;
        height: 2rem;
        outline: 1px solid transparent;

        &:hover,
        &:active {
            opacity: 0.9;
            outline: 1px solid ${({ theme }) => theme.colors.mainSecondary};
        }
    }
`
