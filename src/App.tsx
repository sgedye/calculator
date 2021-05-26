import { Fragment } from "react";
import styled from "styled-components";

import { Body, Legend } from "./components";

export const App: React.FC<{}> = () => {
  return (
    <Fragment>
      <Title id="title">Calculator</Title>
      <Body />
      <Legend />
    </Fragment>
  );
};

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2em;
  text-shadow: 2px 2px 2px #fff;
  text-align: center;
  color: #000;
`;
