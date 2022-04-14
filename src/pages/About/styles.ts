import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 100px 0px;
    background: linear-gradient(#f3f3f3, #fff);
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const SubtitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    @media only screen and (max-width: 600px) {
        align-items: center;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    word-wrap: break-word;
    font-size: 46px;
    font-weight: 600;
    line-height: 1;
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    word-wrap: break-word;
    font-size: 24px;
    font-weight: 600;
`;

export const TitleDescription = styled.p`
    line-height: 1.5;
    text-align: center;
    max-width: 800px;
`;

export const Description = styled.p`
    line-height: 1.5;
    text-align: justify;
    max-width: 280px;
`;

export const Icon = styled.img`
    height: 40px;
`;