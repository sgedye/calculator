import styled from "styled-components";

export const Legend: React.FC<{}> = () => {
  return (
    <StyledDiv>
      <table>
        <thead>
          <tr>
            <th colSpan={2} style={{ paddingBottom: "1rem" }}>
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
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #000;
    border-bottom: none;
    border-radius: 0.5rem;
    box-shadow: 2px 3px 5px #000;
  }
`;
