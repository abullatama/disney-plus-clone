import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const hamburger = document.querySelector(".btn-hamburger");
  const subMenu = document.querySelector(".subMenu");
  if (hamburger) {
    hamburger.addEventListener("mouseenter", () => {
      subMenu.classList.add("fade-in");
    });
    console.log("cok");
  }

  return (
    <Nav>
      {userName ? (
        <Hamburger className="btn-hamburger">
          <span></span>
          <span></span>
          <span></span>
          <div className="subMenu">
            <div className="iconGenres"></div>
            <a href="#">Genres</a>
          </div>
        </Hamburger>
      ) : null}

      <Logo>
        <img src="disney-hotstar-logo-dark.svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="#">
              <span>Series</span>
              <div className="nav-submenu">
                <a href="#">Hotstar Special</a>
              </div>
            </a>
            <a href="#">
              <span>Movies</span>
              <div className="nav-submenu">
                <a href="#">Indonesian</a>
                <a href="#">English</a>
              </div>
            </a>
            <a href="#">
              <span>Disney+</span>
            </a>
            <a href="#">
              <span>Local</span>
            </a>
            <a href="#">
              <span className="iconKids"></span>
            </a>
          </NavMenu>
          <Search>
            <input
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
            ></input>
            <div className="searchIcon">
              <img src="/images/search-icon.svg" alt="SEARCH" />
            </div>
          </Search>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #141b29;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(3.5vw + 5px);
  padding-top: 6px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 115px;
  height: 45px;
  padding-bottom: 10px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  position: relative;
  padding: 20px;
  margin-left: -10px;
  cursor: pointer;
  span {
    width: 18px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
    display: block;

    &:nth-child(2) {
      margin: 3px 0;
    }
  }

  &:hover {
    .subMenu {
      animation: fade-in 400ms ease-in-out forwards;
    }
  }

  .subMenu {
    display: flex;
    opacity: 1;
    align-items: center;
    position: absolute;
    border-radius: 2px;
    margin: 20px 0;
    background-color: #192133;
    padding: 10px 20px;
    animation: fade-out 1s ease-in-out forwards;

    .iconGenres {
      background: url(images/my-icons.svg) no-repeat;
      width: 22px;
      height: 22px;
      margin-right: 20px;
      background-position: -272px -34px;
    }

    a {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      margin: 5px 0;
    }

    &:hover {
      background-color: #0c111b;
      .iconGenres {
        background-position: -272px -0px;
      }
      a {
        color: white;
      }
    }
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    padding: 20px 15px 20px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      letter-spacing: 0.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &.iconKids {
        width: 40px;
        height: 15px;
        background: url(/images/icon-kids.svg) no-repeat;
      }

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:first-child {
      .nav-submenu {
        position: absolute;
        top: 50px;
        left: 0;
        opacity: 0;
        border-radius: 4px;
        background-color: #192133;

        a {
          font-size: 14px;
          padding: 10px 20px;
        }

        &:hover {
          background-color: #0c111b;
          a {
            color: white;
          }
        }
      }

      &:hover {
        .nav-submenu {
          animation: slide-up 400ms ease-in-out forwards;
        }
      }
    }

    &:nth-child(2) {
      .nav-submenu {
        position: absolute;
        top: 50px;
        left: 72px;
        opacity: 0;
        border-radius: 4px;
        background-color: #192133;

        a {
          font-size: 14px;
          padding: 10px 20px;
          transition: 0.3s;
          &:hover {
            background-color: #0c111b;
            color: white;
          }
        }
      }

      &:hover {
        .nav-submenu {
          animation: slide-up 400ms ease-in-out forwards;
        }
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Search = styled.div`
  padding-right: 40px;

  input {
    position: relative;
    width: 240px;
    height: 32px;
    font-size: 16px;
    transition: width 0.2s ease-in-out;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    background: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);

    &::placeholder {
      color: rgba(193, 196, 199, 1);
    }

    &:focus {
      width: 360px;
      border-bottom: 1px solid #1f80e0;
      outline: none;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }

  .searchIcon {
    position: absolute;
    width: 16px;
    top: 25px;
    right: 145px;
    img {
      width: 100%;
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 38px;
    height: 38px;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
