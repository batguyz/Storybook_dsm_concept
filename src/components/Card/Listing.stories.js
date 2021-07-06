import React from "react";
import { action } from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs'
import ListinCard from './Listing.card'


export default {
    title: 'ListingCard',
    component: ListinCard,
    decorators: [withKnobs],
   
  };
  
  
  
  export const Default = () => {
      const btnText = text('Title', 'Primary button');
      return (
      <ListinCard >
          {btnText}
      </ListinCard>
      )
  };
  
  Default.story = {
    name: "default",
    decorators: [withInfo]
  };