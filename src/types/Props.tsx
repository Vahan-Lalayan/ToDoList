import { RefObject } from "react";

interface CurrentProps {
    e : React.FormEvent
    text : RefObject<HTMLInputElement>
    form: RefObject<HTMLFormElement>
}
export default CurrentProps