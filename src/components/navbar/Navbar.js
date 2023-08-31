import { useLocation, useNavigate } from "react-router-dom";
import userImage from "../../assets/user.png";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import DropDown from "./dropdown/DropDown";
import CreatePost from "../createPost/CreatePost";
import SearchUser from "../searchUser/SearchUser";



function Navbar({ darkMode, toggleDarkMode }) {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openCreatePost, setOpenCreatePost] = useState(false);
    const [openSearchBox, setOpenSearchBox] = useState(false);
    const myProfile = useSelector((state) => state.appConfigReducer.myProfile);
    const src = myProfile?.avatar?.url;

    const location = useLocation();
    const path = location.pathname;

    const handleMoreClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={darkMode ? "Navbar dark-mode" : "Navbar"}>
            <div className="nav-container">
                <div className="banner" onClick={() => navigate("/")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Instagram"
                        className="_ab6- insta-icon"
                        color="#262626"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z" />
                    </svg>
                  
                    <h1 className="insta-name-icon">Instamate</h1>
                    <h1 className="insta-icon-mob">Instamate</h1>

                </div>
                <h1 className="insta-icon-mob-2">Instamate</h1>

                <div className="nav-links-container">
                    <ul>
                        <li className="nav-link" onClick={() => navigate("/")}>
                            {path === "/" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="Home"
                                    className="_ab6-"
                                    color="#262626"
                                    fill="#262626"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="Home"
                                    className="_ab6-"
                                    color="#262626"
                                    fill="#262626"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path
                                        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            )}
                            <span className="home-nav">Home</span>
                        </li>
                        <li
                            className="nav-link"
                            onClick={() => setOpenSearchBox(!openSearchBox)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Search"
                                className="_ab6-"
                                color="#262626"
                                fill="#262626"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="16.511"
                                    x2="22"
                                    y1="16.511"
                                    y2="22"
                                />
                            </svg>
                            <span>Search</span>
                        </li>
                        {openSearchBox && (
                            <SearchUser
                                closeSearchBox={() => setOpenSearchBox(false)}
                                setOpenSearchBox={setOpenSearchBox}
                            />
                        )}
                        <li
                            className="nav-link"
                            onClick={() => navigate("/explore")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Explore"
                                className="_ab6-"
                                color="#262626"
                                fill="#262626"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <polygon
                                    fill="none"
                                    points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <polygon
                                    fillRule="evenodd"
                                    points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                                />
                                <circle
                                    cx="12.001"
                                    cy="12.005"
                                    fill="none"
                                    r="10.5"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span>Explore</span>
                        </li>

                        <li
                            className="nav-link"
                            onClick={() => setOpenCreatePost(!openCreatePost)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="New post"
                                className="_ab6-"
                                color="#262626"
                                fill="#262626"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="6.545"
                                    x2="17.455"
                                    y1="12.001"
                                    y2="12.001"
                                />
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="12.003"
                                    x2="12.003"
                                    y1="6.545"
                                    y2="17.455"
                                />
                            </svg>
                            <span>Create</span>
                        </li>
                        {openCreatePost && (
                            <CreatePost
                                closeCreatePost={() => setOpenCreatePost(false)}
                                setOpenCreatePost={setOpenCreatePost}
                            />
                        )}
                        <li
                            className="nav-link"
                            onClick={() =>
                                navigate(`/profile/${myProfile?._id}`)
                            }
                        >
                            <div className="nav-avatar">
                                <img
                                    src={src ? src : userImage}
                                    alt="User Avatar"
                                />
                            </div>
                            <span>Profile</span>
                        </li>

                        <li
                            className={`nav-link more-nav ${isDropdownOpen ? "open" : ""
                                }`}
                            onClick={handleMoreClick}
                        >
                            {isDropdownOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="Settings"
                                    className="_ab6-"
                                    color="#262626"
                                    fill="#262626"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="Settings"
                                    className="_ab6-"
                                    color="#262626"
                                    fill="#262626"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="3"
                                        x2="21"
                                        y1="4"
                                        y2="4"
                                    />
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="3"
                                        x2="21"
                                        y1="12"
                                        y2="12"
                                    />
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="3"
                                        x2="21"
                                        y1="20"
                                        y2="20"
                                    />
                                </svg>
                            )}
                            <span>More</span>
                        </li>
                        {isDropdownOpen && (
                            <DropDown
                                isDropdownOpen={isDropdownOpen}
                                setIsDropdownOpen={setIsDropdownOpen}
                                dropDownClose={() => setIsDropdownOpen(false)}
                                toggleDarkMode={toggleDarkMode}
                                darkMode={darkMode}
                            />
                        )}
                    </ul>
                </div>

                <div className="more">
                    <div
                        className={`nav-link ${isDropdownOpen ? "open" : ""}`}
                        onClick={handleMoreClick}
                    >
                        {isDropdownOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Settings"
                                className="_ab6-"
                                color="#262626"
                                fill="#262626"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Settings"
                                className="_ab6-"
                                color="#262626"
                                fill="#262626"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="3"
                                    x2="21"
                                    y1="4"
                                    y2="4"
                                />
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="3"
                                    x2="21"
                                    y1="12"
                                    y2="12"
                                />
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="3"
                                    x2="21"
                                    y1="20"
                                    y2="20"
                                />
                            </svg>
                        )}
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

