import { keyframes } from "styled-components"

export const appearAnimation = keyframes`
    from{
        transform: translateY(-5%);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`

export const slideDownAnimation = keyframes`
    from{
        transform: translateY(-100%);
        opacity: 0.5;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`

export const expandAnimation = keyframes`
    from{
        height: 0;
    }
    to{
        height: 100%;
    }
`

export const spinAnimation = keyframes`
    from{
        transform: rotateZ(0deg)
    }
    to{
        transform: rotateZ(2160deg)
    }
`
