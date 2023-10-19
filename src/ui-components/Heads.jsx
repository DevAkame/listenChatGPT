/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuth,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Heads(props) {
  const { heads, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const headsOnClick = useAuthSignOutAction({ global: false });
  return (
    <View
      width="1635px"
      height="87px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor={heads}
      children={`${heads}${""}${heads}`}
      onClick={() => {
        headsOnClick();
      }}
      {...getOverrideProps(overrides, "Heads")}
      {...rest}
    ></View>
  );
}
