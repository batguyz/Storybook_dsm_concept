import React from "react";
import { StyledListinCard }from './Listing-style'


function ListingCard({ children}) {
    return (
        <StyledListinCard >{children}</StyledListinCard>
    );
}




export default ListingCard;