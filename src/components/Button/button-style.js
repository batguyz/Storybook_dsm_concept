import styled from "styled-components";
import { colors, backgrounds } from '../../Utilities'




export const StyledButton = styled.button`
  color: ${(props) =>
    props.reverse ? colors.white : colors.CREA_FAKE_RED};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${(props) =>
    props.reverse ? colors.white : colors.CREA_FAKE_RED};
  border-radius: 2rem;
  background: ${(props) =>
    props.reverse ? colors.CREA_FAKE_RED : "transparent"};

  :hover {
    color: ${(props) =>
      props.reverse ? colors.CREA_FAKE_RED : colors.white};
    background-color: ${(props) =>
      props.reverse ? colors.white : colors.CREA_FAKE_RED};
    cursor: pointer;
    border-color: ${(props) =>
      props.reverse ? colors.CREA_FAKE_RED : colors.white};
  }
`;


export const StyledButtonSuccess = styled(StyledButton)`
    color: ${colors.CREA_FAKE_RED};
    border: 2px solid ${colors.CREA_FAKE_RED};
    :hover {
        color: ${colors.white};
        background-color: ${colors.CREA_FAKE_RED};
        cursor: pointer;
    }
`

export const StyledButtonDanger = styled(StyledButton)`
    color: ${colors.danger500};
    border: 2px solid ${colors.danger500};
    :hover {
        color: ${colors.white};
        background-color: ${colors.danger500};
        cursor: pointer;
    }
`


export const ButtonBullet = styled.button`
  height: 12px;
  background-color: black;
  border: none;
  border-radius: 50%;
  position: absolute;
  bottom: -20%;
  margin: auto;
  display: block;

  &:hover {
    background-color: ${backgrounds.primary800};
  }

  &:first-of-type {
   margin-left: 50px;
  }
`

export default StyledButton;