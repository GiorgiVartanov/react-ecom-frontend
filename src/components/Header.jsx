import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { VscChromeClose, VscMenu } from "react-icons/vsc"

import { useOnClickOutside } from "../hooks/useOnClickOutside"
import { StyledHeader } from "./styles/StyledHeader"
import { logout, reset } from "../features/auth/authSlice"

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const ref = useRef()

    const { user, isLoading } = useSelector((state) => state.auth)

    const handleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState)
    }

    const handleClickOutside = () => {
        setIsDropdownOpen(false)
    }

    const handleLogOut = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/login")
    }

    useOnClickOutside(ref, handleClickOutside)

    return (
        <StyledHeader
            ref={ref}
            isDropdownShown={isDropdownOpen}
        >
            <div className="header-content">
                <h1>
                    <Link to="/">Ecom</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/shop">shop</NavLink>
                        </li>
                        {user ? (
                            <>
                                <li>
                                    <NavLink to="/cart">cart</NavLink>
                                </li>
                                <li>
                                    <button onClick={handleLogOut}>
                                        logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login">login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register">register</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <button
                    onClick={handleDropdown}
                    className="hamburger-menu-button"
                >
                    {isDropdownOpen ? (
                        <VscChromeClose size={32} />
                    ) : (
                        <VscMenu size={32} />
                    )}
                </button>
            </div>
        </StyledHeader>
    )
}
export default Header
