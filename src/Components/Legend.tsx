import styled from "styled-components";

export const Legend: React.FC<{}> = () => {
  return (
    <StyledDiv>
      <table style={{ margin: "auto", padding: "1rem 0" }}>
        <thead>
          <tr>
            <th colSpan={2} style={{ paddingBottom: "0.5rem" }}>
              Key Strokes:
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clear</td>
            <td>esc, c, C</td>
          </tr>
          <tr>
            <td>Add</td>
            <td>space, +</td>
          </tr>
          <tr>
            <td>Subtract</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Multiply</td>
            <td>*, x, X</td>
          </tr>
          <tr>
            <td>Divide</td>
            <td>/</td>
          </tr>
          <tr>
            <td>Equals</td>
            <td>return, =</td>
          </tr>
          <tr>
            <td>Numbers</td>
            <td>0-9</td>
          </tr>
          <tr>
            <td>Decimal</td>
            <td>.</td>
          </tr>
          <tr>
            <td>Percent</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Plus/Minus</td>
            <td>~</td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
    color: #000;
    border: 1px solid #000;
    box-shadow: 2px 3px 5px #000;
    border-bottom: none;
    border-radius: 0.5rem;
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
    position: absolute;
    right: 35px;
  }
  @media screen and (min-width: 1024px) {
    right: 50px;
  }
  @media screen and (min-width: 1440px) {
    right: 230px;
  }
`;
