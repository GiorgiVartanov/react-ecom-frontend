import styled from "styled-components"

import {
    appearAnimation,
    slideDownAnimation,
} from "../../utils/styledComponentsKeyframes"

export const StyledHeader = styled.header`
    height: 3.25rem;
    background-color: ${({ theme }) => theme.colors.main};
    align-items: center;
    animation: ${slideDownAnimation} 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    position: relative;
    z-index: 10;

    .header-content {
        width: calc(100% - 1rem);
        max-width: calc(1000px + 1.5rem);
        margin: auto;
        display: flex;
        flex-direction: row;
        height: 3.25rem;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 1.5rem;

            a {
                padding: 0.5rem 0.75rem;
            }
        }

        nav {
            ul {
                display: flex;
                justify-content: space-between;
                gap: 0.25rem;

                li {
                    a,
                    button {
                        padding: 0.5rem 0.75rem;
                        height: 100%;
                        transition: 0.15s ease-in;
                        font-weight: bold;
                        font-weight: 300;
                        position: relative;
                        border: none;
                        background-color: transparent;
                        display: block;
                        cursor: pointer;

                        &:hover,
                        &:active {
                            &::before {
                                height: 100%;
                                opacity: 0.1;
                            }
                        }

                        &.active {
                            background-color: ${({ theme }) =>
                                theme.colors.mainSecondary};
                            color: ${({ theme }) => theme.colors.main};

                            &:hover,
                            &:active {
                                opacity: 0.9;
                            }
                        }

                        &::before {
                            content: "";
                            position: absolute;
                            background-color: ${({ theme }) =>
                                theme.colors.mainSecondary};
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 0;
                            opacity: 0.1;
                            transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                            z-index: 2;
                        }
                    }
                }
            }
        }

        .hamburger-menu-button {
            display: none;
            padding: 0 0.75rem;
        }

        @media screen and (max-width: ${({ theme }) => theme.sizes.small}) {
            .hamburger-menu-button {
                background-color: transparent;
                outline: none;
                border: none;
                height: 2rem;
                display: block;
                cursor: pointer;
            }
        }

        @media screen and (max-width: ${({ theme }) => theme.sizes.small}) {
            nav {
                width: 100%;
                opacity: 0;
                position: absolute;
                top: 2.5rem;
                left: 0;
                display: ${({ isDropdownShown }) =>
                    isDropdownShown ? "block" : "none"};
                animation: 0.2s ${appearAnimation} ease-in-out forwards;

                ul {
                    padding: 0.5rem 0.5rem;
                    flex-direction: column;
                    background-color: ${({ theme }) => theme.colors.main};
                    width: 100%;
                    position: relative;

                    li {
                        width: 100%;
                        a {
                            display: block;
                            width: 100%;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
`
