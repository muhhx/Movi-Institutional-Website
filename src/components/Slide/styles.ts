import styled from "styled-components";

type Props = {
    isTrue?: boolean;
    containerWidth?: string;
    url?: string;
    infoWidth?: string;
}

export const Section = styled.section`
    width: 100%;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
        min-height: 100vh;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${( props: Props ) => props.isTrue ? 'row' : 'row-reverse'};
    align-items: flex-start;
    justify-content: ${( props: Props ) => props.isTrue ? 'end' : 'start'};

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding-bottom: 150px;
        gap: 50px;
    }
`;

export const WrapContainer = styled.div`
    width: ${( props: Props ) => props.infoWidth};
    height: 100%;
    padding: 0px 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        width: 100%;
        padding: 0px;
    }
`;

export const InformationWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: relative;
    
    @media only screen and (max-width: 900px) {
        align-items: center;
        padding: initial;
        width: 90%;
    }
`;

export const VideoWrapper = styled.div`
    min-width: ${( props: Props ) => props.containerWidth};
    height: 100%;
    background-image: url(${(props: Props) => props.url});
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: 900px) {
        width: 100%;
        height: 80vh;
    }
`;

export const Number = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orange};
    z-index: 2;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    color: rgb(241, 137, 45);
    text-align: center;
    z-index: 2;

    @media only screen and (max-width: 900px) {
        text-align: center;
    }
`;

export const Description = styled.p`
    font-size: 12px;
    font-weight: 300;
    line-height: 1.5;
    color: white;
    text-align: justify;
    z-index: 2;
`;

export const BackgroundNumber = styled.span`
    position: absolute;
    color: #131313;
    font-size: 144px;
    font-weight: 600;
    line-height: 1;
    z-index: 1;
    top: 0;
    padding-top: 65px;

    @media only screen and (max-width: 900px) {
        padding-top: initial;
    }
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;