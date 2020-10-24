import React from "react";
import {HeroBanner,HeroBannerImage, HeroBannerLight, HeroBannerDark} from "./HeroBanner";
import { action } from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'HeroBanner',
    component: HeroBanner,
    decorators: [withKnobs], 
    decorators: [withInfo]
  };
  
  export const Default = () => {
    const title = text('Title', 'Default title');
    const btnText = text('Button text', 'Button')
      return (
        <HeroBanner onClick={action('button was clicked')} title={title}>
        {btnText}
     </HeroBanner>
      )
  };
  
  Default.story = {
      name: 'default',
      decorators: [withInfo]
  };
  
  export const Light = () => {
      const title = text('Title', 'Title');
      const btnText = text('Button text', 'Button');
      return (
      <HeroBannerLight onClick={action('button was clicked')} title={title}>
          {btnText}
      </HeroBannerLight>
      )
  };
  
  Light.story = {
      name: 'light',
      decorators: [withInfo]
  };
  
  export const Dark = () => {
      const title = text('Title', 'Title');
      const btnText = text('Button text', 'Button');
      return (
      <HeroBannerDark onClick={action('button was clicked')} title={title}>
          {btnText}
      </HeroBannerDark>
      )
  };
  
  Dark.story = {
      name: 'dark',
      decorators: [withInfo]
  };
  
  export const Image = () => {
      const title = text('Title', 'This is the title');
      return (
          <HeroBannerImage src="/cat.jpg" title={title} />
      )
  };
  
  Image.story = {
      name: 'image',
      decorators: [withInfo]
  };