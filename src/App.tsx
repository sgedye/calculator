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
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 2px #fff;
  text-align: center;
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
