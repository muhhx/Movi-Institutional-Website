import { SlideData } from "../../types";
import * as C from "./styles";

type Props = {
    data: SlideData;
    index: number;
}

export default function Slide({ data, index }: Props) {
  return (
    <C.Section>
        <C.Container isTrue={index % 2 === 0 ? true : false}>
            <C.WrapContainer infoWidth={data.infoWidth}>
                <C.InformationWrapper>
                    <C.Title>{data.title}</C.Title>
                    <C.DescriptionWrapper>
                        {data.descriptions.map((desc, key) => (
                            <C.Description key={key}>{desc}</C.Description>
                        ))}
                    </C.DescriptionWrapper>
                </C.InformationWrapper>
            </C.WrapContainer>
            <C.VideoWrapper containerWidth={data.width} url={data.photo} />
        </C.Container>
    </C.Section>
  )
}
