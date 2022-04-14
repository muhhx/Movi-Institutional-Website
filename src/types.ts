import { ReactNode } from "react";

export type ContextProps = {
    children: ReactNode;
}

export type SlideData = {
    title: string;
    descriptions: string[];
    photo: string;
    width: string;
    infoWidth: string;
}