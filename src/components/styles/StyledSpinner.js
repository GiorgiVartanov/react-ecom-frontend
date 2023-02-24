import styled from "styled-components"

import { spinAnimation } from "../../utils/styledComponentsKeyframes"

export const StyledSpinner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    .spinner {
        height: 3rem;
        width: 3rem;
        border: 0.5rem solid ${({ theme }) => theme.colors.main};
        border-right: 0.5rem solid transparent;
        border-radius: 100%;
        animation: ${spinAnimation} 3s ease-in-out infinite;
    }
`
