/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeadsOverridesProps = {
    Heads?: PrimitiveOverrideProps<ViewProps>;
    "ChatGPT\u306B\u304D\u3044\u3066\u307F\u305F"?: PrimitiveOverrideProps<TextProps>;
    "\uD83E\uDD86 icon \"profile circle\""?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector3848739?: PrimitiveOverrideProps<IconProps>;
    Vector3848740?: PrimitiveOverrideProps<IconProps>;
    Vector3848741?: PrimitiveOverrideProps<IconProps>;
    "\uD83E\uDD86 icon \"add circle\""?: PrimitiveOverrideProps<ViewProps>;
    Vector3848735?: PrimitiveOverrideProps<IconProps>;
    Akame?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeadsProps = React.PropsWithChildren<Partial<ViewProps> & {
    heads?: React.ReactNode;
} & {
    overrides?: HeadsOverridesProps | undefined | null;
}>;
export default function Heads(props: HeadsProps): React.ReactElement;
