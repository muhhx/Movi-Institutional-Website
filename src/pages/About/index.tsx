import { data } from "./data";
import * as C from "./styles";

export default function About() {
  return (
    <C.Section>
        <C.Container>
            <C.TitleWrapper>
                <C.Title>{data.title1}</C.Title>
                <C.TitleDescription>{data.text1}</C.TitleDescription>
            </C.TitleWrapper>
            <C.Wrapper>
                <C.SubtitleWrapper>
                    <C.Icon src={data.icon1} alt={data.iconAlt}/>
                    <C.Subtitle>{data.title2}</C.Subtitle>
                    <C.Description>{data.text2}</C.Description>
                </C.SubtitleWrapper>
                <C.SubtitleWrapper>
                    <C.Icon src={data.icon2} alt={data.iconAlt}/>
                    <C.Subtitle>{data.title3}</C.Subtitle>
                    <C.Description>{data.text3}</C.Description>
                </C.SubtitleWrapper>
                <C.SubtitleWrapper>
                    <C.Icon src={data.icon3} alt={data.iconAlt}/>
                    <C.Subtitle>{data.title4}</C.Subtitle>
                    <C.Description>{data.text4}</C.Description>
                </C.SubtitleWrapper>
            </C.Wrapper>
        </C.Container>
    </C.Section>
  )
}
