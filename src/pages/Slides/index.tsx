import Slide from "../../components/Slide";
import { data } from "./data";

export default function Slides() {
  return (
      <>
        {data.map((dataObj, key) => (
            <Slide key={key} data={dataObj} index={key}/>
        ))}
      </>
  )
}
