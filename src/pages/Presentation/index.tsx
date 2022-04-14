import { data } from "./data";
import * as C from "./styles";

export default function Presentation() {
  return (
    <C.Section>
      <C.Container>
        <C.BackgroundVideo src={data.backgroundVideo} autoPlay loop muted/>
      </C.Container>
    </C.Section>
  )
}
