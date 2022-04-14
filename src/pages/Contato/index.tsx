import { data } from "./data"
import * as C from "./styles"

export default function Contato() {
  return (
    <C.Section>
        <C.Container>
            <C.Title>{data.title}</C.Title>
            <C.Description>{data.description}</C.Description>
            <C.Button>{data.button}</C.Button>
        </C.Container>
    </C.Section>
  )
}
