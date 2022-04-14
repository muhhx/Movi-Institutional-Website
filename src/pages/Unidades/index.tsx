import { data } from "./data";
import * as C from "./styles";

export default function Unidades() {
  return (
    <>
        <C.Divisor imageURL={data.divisorImage}/>
        <C.Section>
            <C.Container>
              <C.TitleWrapper>
                <C.Title>{data.title1}</C.Title>
                <C.TitleDescription>{data.text1}</C.TitleDescription>
              </C.TitleWrapper>
              <C.Wrapper>
                <C.SubtitleWrapper>
                  <C.Subtitle>{data.title2}</C.Subtitle>
                  <C.Description>{data.text2}</C.Description>
                  <C.Button>{data.button}</C.Button>
                </C.SubtitleWrapper>
                <C.SubtitleWrapper>
                  <C.Subtitle>{data.title3}</C.Subtitle>
                  <C.Description>{data.text3}</C.Description>
                  <C.Button>{data.button}</C.Button>
                </C.SubtitleWrapper>
                <C.SubtitleWrapper>
                  <C.Subtitle>{data.title4}</C.Subtitle>
                  <C.Description>{data.text4}</C.Description>
                  <C.Button>{data.button}</C.Button>
                </C.SubtitleWrapper>
              </C.Wrapper>
            </C.Container>
        </C.Section>
    </>
  )
}
