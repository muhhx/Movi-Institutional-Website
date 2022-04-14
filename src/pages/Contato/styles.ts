import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    min-height: 90vh;
    padding: 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient( #191919, #131313);
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Title = styled.h1`
    color: white;
    text-align: center;
    word-wrap: break-word;
    font-size: 46px;
    font-weight: 600;
    line-height: 1;
`;

export const Description = styled.p`
    line-height: 1.5;
    text-align: center;
    max-width: 400px;
    color: white;
`;

export const Button = styled.button`
    height: 50%;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: white;
    font-size: 12px;
    padding: 15px 30px;
    cursor: pointer;
    font-weight: 600;
`;