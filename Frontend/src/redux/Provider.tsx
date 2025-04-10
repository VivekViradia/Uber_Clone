"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface iProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<iProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
