import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 70px;
    /* background: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 0)); */
    background-color: white;
    display: flex;
    justify-content: center;
    z-index: 99;
    position: sticky;
    top: 0;
    /* backdrop-filter: blur(10px); */
    /* box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);    */
`;

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    z-index: 99;
    cursor: pointer;

    @media only screen and (max-width: 700px) {
        display: none;
    }
`;

export const Contact = styled.button`
    background-color: transparent;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: black;
    cursor: pointer;
`;

export const Underline = styled.div`
    border-bottom: 1px solid black;
    width: 50%;
`;

export const Hamburger = styled.button`
    height: 35%;
    aspect-ratio: 1;
    border: none;
    cursor: pointer;
    background-color: transparent;
    z-index: 99;
`;

export const Icon = styled.img`
    width: 100%;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 98;

    @media only screen and (max-width: 700px) {
        justify-content: end;
    }
`;

export const Logo = styled.img`
    height: 80%;
    cursor: pointer;
`;