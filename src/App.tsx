import styled from "styled-components";

import { Body, Legend } from "./components";

export const App: React.FC<{}> = () => {
  return (
    <>
      <Title id="title">Calculator</Title>
      <Wrapper>
        <Body />
        <Legend />
      </Wrapper>
    </>
  );
};

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2em;
  text-shadow: 2px 2px 2px #fff;
  text-align: center;
  color: #000;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
