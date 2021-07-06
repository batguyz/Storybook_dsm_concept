import styled from "styled-components";
import { colors, backgrounds } from '../../Utilities'


export const StyledListinCard = styled.div`
     color: ${colors.success500};
    border: 2px solid ${colors.sucess500};
    width: 21.5rem;
    height: 13.438rem;
    :hover {
        color: ${colors.white};
        background-color: ${colors.success500};
        
        cursor: pointer;
    }

`;

export default StyledListinCard;