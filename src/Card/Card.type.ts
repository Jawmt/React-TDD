import { MouseEventHandler } from "react";

type CardProps = {
    title:string;
    body:string;
    footer?: string;
    buttonLabel?: string;
    buttonAction?:MouseEventHandler | undefined;
}

export default CardProps;