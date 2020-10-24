import styled from "styled-components";
import { colors } from "../../Utilities"

const Heading1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) =>
    props.reverse ? colors.white : colors.primary500};
`;

export default Heading1;