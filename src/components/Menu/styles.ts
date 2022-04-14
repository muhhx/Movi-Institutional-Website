import styled from "styled-components";

export const Sticky = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    height: 0;
    z-index: 98;
`;

export const Section = styled.section`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, .8));
    backdrop-filter: blur(30px);
`;

export const Option = styled.button`
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
    font-size: 12px;
    padding: 10px 50px;
    cursor: pointer;
    font-weight: 600;
`;