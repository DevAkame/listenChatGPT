/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardOverridesProps = {
    Card?: PrimitiveOverrideProps<ViewProps>;
    titletitletitle?: PrimitiveOverrideProps<TextProps>;
    "dddddddddd dddddddddd dddddddddd"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"like 1\""?: PrimitiveOverrideProps<FlexProps>;
    Group3848761?: PrimitiveOverrideProps<ViewProps>;
    Vector3848762?: PrimitiveOverrideProps<IconProps>;
    Vector3848763?: PrimitiveOverrideProps<IconProps>;
    "00003848771"?: PrimitiveOverrideProps<TextProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"dislike\""?: PrimitiveOverrideProps<FlexProps>;
    Group3848766?: PrimitiveOverrideProps<ViewProps>;
    Vector3848767?: PrimitiveOverrideProps<IconProps>;
    Vector3848768?: PrimitiveOverrideProps<IconProps>;
    "00003848773"?: PrimitiveOverrideProps<TextProps>;
    Akame?: PrimitiveOverrideProps<TextProps>;
    "XXXX DD:mm"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardOverridesProps | undefined | null;
}>;
export default function Card(props: CardProps): React.ReactElement;
