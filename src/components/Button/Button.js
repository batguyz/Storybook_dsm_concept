import React from "react";
import {   
  StyledButton,
  StyledButtonSuccess,
  StyledButtonDanger, }from './button-style'

  function Button({onClick, reverse, children}) {
    return (
        <StyledButton reverse={reverse} onClick={onClick}>{children}</StyledButton>
    );
}

  
  
  export function ButtonSuccess({onClick, children}) {
    const btnText = "Success button";
    return (
        <StyledButtonSuccess onClick={onClick}>
        
        
        {children}
        </StyledButtonSuccess>
    );
}

export function ButtonDanger({onClick, reverse, children}) {
    const btnText = "Danger button";
    return (
        <StyledButtonDanger onClick={onClick}>{children}</StyledButtonDanger>
    );
}


export default Button;