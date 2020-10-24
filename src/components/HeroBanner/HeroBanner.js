import React, {useState} from "react";
import { Wrapper, WrapperLight,WrapperDark, WrapperImage, H1} from "./Herobanner.style";
import {ButtonBullet} from '../Button/button-style'
import Title from "../Title/Title";
import Button from "../Button/Button"


export function HeroBanner({onClick, children, title}) {



  return (
      <Wrapper>
          <Title>{title}</Title>
          <Button onClick={onClick}>{children}</Button>
      </Wrapper>
  );
}

export function HeroBannerLight({onClick, children, title}) {
  return (
      <WrapperLight>
          <Title>{title}</Title>
          <Button onClick={onClick}>{children}</Button>
      </WrapperLight>
  );
}

export function HeroBannerDark({onClick, children, title}) {
  return (
      <WrapperDark>
          <Title reverse>{title}</Title>
          <Button reverse onClick={onClick}>{children}</Button>
      </WrapperDark>
  );
}

export function HeroBannerImage({state, title}) {

  state = {
      src: [
          'scorp.jpg',
          'shang.jpg',
          'sub.jpg',
          'dredd.jpg'
      ],
  }

  const [index, handleIndex] = useState(0);
  
  return (
      <Wrapper>
          <WrapperImage src={state.src[index]} alt=""/>
          <H1>{title}</H1>
          <ButtonBullet onClick={() => handleIndex(index + 1)}></ButtonBullet>
          <ButtonBullet onClick={() => handleIndex(index - 1)}></ButtonBullet>
      </Wrapper>
  );
}