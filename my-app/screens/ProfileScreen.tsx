import { Box, Text } from "native-base";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthenticationModal from "../navigation/AuthenticationModal";

function ProfileScreen() {
  const // @ts-ignore
    user = useSelector((state) => state.user);

  if (user.user.userDataKey) {
    return <Box flex="1" bg="black"></Box>;
  } else {
    // @ts-ignore
    return <AuthenticationModal />;
  }
}

export default ProfileScreen;
