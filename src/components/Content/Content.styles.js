import styled from "styled-components";
import { colors, backgrounds, space } from '../../Utilities'




export const StyledContent = styled.div`
  color: ${(props) =>
    props.reverse ? colors.info500 : colors.CREA_FAKE_RED };
padding: ${space.SPACE_LARGE}

`;


export default StyledContent

