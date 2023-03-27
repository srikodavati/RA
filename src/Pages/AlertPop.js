import React from "react";
import { Alert, AlertTitle } from "@chakra-ui/react";
import '../Style.css';

export default function AlertPop (props) {
  return (
    <Alert status="error">
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}
