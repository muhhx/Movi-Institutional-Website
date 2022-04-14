import styled from "styled-components";

type Props = {
    imageURL: string;
}

export const Divisor = styled.div`
    width: 100%;
    height: 100px;
    background-image: url(${(props: Props) => props.imageURL});
    background-size: cover;
    background-position: center center;
    margin-top: 100px;
`;

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin: 50px 0px;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    gap: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const SubtitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.orange};
    box-shadow: 11px 11px 0 0 #c4c4c4;
    padding: 80px 30px 30px;
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
    color: white;
`;

export const TitleDescription = styled.p`
    line-height: 1.5;
    text-align: center;
    max-width: 800px;
`;

export const Description = styled.p`
    line-height: 1.5;
    max-width: 280px;
    color: white;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
    color: white;
    font-size: 12px;
    padding: 15px 20px;
    cursor: pointer;
`;