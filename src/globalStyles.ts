import styled, { createGlobalStyle } from "styled-components";

type Props = {
    isOpen: boolean;
}

export const GlobalStyle = createGlobalStyle`
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