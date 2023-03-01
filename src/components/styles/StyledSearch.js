import styled from "styled-components"

import { appearAnimation } from "../../utils/styledComponentsKeyframes"

export const StyledSearch = styled.div`
    animation: ${appearAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    .category-list {
        display: flex;
        margin: 1rem auto;
        width: fit-content;
        gap: 0.25rem;
        flex-wrap: wrap;
        justify-content: center;
    }
`
