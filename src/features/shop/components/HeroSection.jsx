import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiChevronDoubleDown } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../../auth/authSlice';

const HeroSection = () => {
  const user = useSelector(selectLoggedInUser);
  const scrollDown = () => {
    // Calculate the Y coordinate to scroll down by 90vh
    const scrollY = window.innerHeight * 0.75;

    // Scroll to the calculated position
    window.scrollTo(0, scrollY);
  };
  return (
    <Container>
        {/* <div className="top">
            <div className="top-div-hero">
              <h1>
                Start buying your groceries on <span>enigma</span> with zero
                extra charges
              </h1>
              <h4>Lie down on your sofa and we will deliver your groceries</h4>
            </div>
            <div className="start-buying-btn">
              {!user && <Link to="/login" className="btn">
                Start Buying
              </Link>}
              {user && <HiChevronDoubleDown size={60} onClick={scrollDown} className="ChevronDoubleDown" />}
            </div>
          </div> */}
          
    </Container>
  )
}
const Container = styled.div`
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-2px);
  }
}

.ChevronDoubleDown {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  animation: bounce 1.5s infinite; /* Add the bounce animation */
}

.ChevronDoubleDown:hover {
  transform: scale(1.2);
  animation: none; /* Disable the bounce animation on hover */
  transition: transform 0.6s ease-in-out; /* Adjust the duration for a slower scale on hover */
}

  .btn {
    cursor: pointer;
    user-select: none;
    background-color: #6933d3;
    color: #f2e3e3;
    padding: 6px;
    margin: 3px;
    border-radius: 10px;
    text-align: center;
  }
  .start-buying-btn-div{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 6vh;
  }
  a {
    text-decoration: none;
    color: #f2e3e3;
  }
  .top {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    padding-top: 20vh;
    height: 75vh;
    .top-div-hero {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .start-buying-btn {
      margin-top: 10vh;
    }
  }
  .top::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("../../../image/first-img.png");
    // background: radial-gradient(
    //   100.21% 831.17% at 2.76% -42.7%,
    //   #b9ffe2 0%,
    //   rgba(185, 255, 226, 0.572558) 24.26%,
    //   rgba(185, 255, 226, 0.291387) 54.44%,
    //   rgba(185, 255, 226, 0) 100%
    // );
    transform: rotate(180deg);
    z-index: -1;
  }
  `
export default HeroSection