import { data } from "./data"
import * as C from "./styles"

export default function Menu() {
  return (
    <C.Sticky>
        <C.Section>
            <C.Option>{data.option1}</C.Option>
            <C.Option>{data.option2}</C.Option>
            <C.Option>{data.option3}</C.Option>
            <C.Option>{data.option4}</C.Option>
            <C.Button>{data.button}</C.Button>
        </C.Section>
    </C.Sticky>
  )
}
