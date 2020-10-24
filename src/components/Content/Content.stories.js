import React from "react";
import { action } from '@storybook/addon-actions';
import StyledContent from './Content'
import { backgrounds } from "../../Utilities"
import {withInfo} from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'StyledContent',
    component: StyledContent,
  
  };
  
  export const Default = () => {

      return (
        <StyledContent>
        
     </StyledContent>
      )
  };
  
export const Reverse = ({reverse}) => {

    return (
        <StyledContent reverse={reverse} />
    )
}

Reverse.story = {
    name: "reverse",
    decorators: [withInfo],
    decorators: [
      (story) => (
        <div style={{ background: `${backgrounds.info800}` }}>
          {story()}
        </div>
      ),
    ],
  };