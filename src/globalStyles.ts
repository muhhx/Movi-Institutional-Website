import styled, { createGlobalStyle } from "styled-components";

type Props = {
    isOpen: boolean;
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
    }

    body { 
        overflow: ${( props: Props ) => props.isOpen === true ? "hidden" : "initial"};
    }
`;

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;