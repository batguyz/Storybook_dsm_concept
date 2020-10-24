import React from "react";
import Title from "./Title";
import { backgrounds } from "../../Utilities"
import {withInfo} from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: "Title",
  component: Title,
  decorators: [withKnobs]
};

export const Default = () => {
  const title = text('Title', 'Title');
  return (
    <Title>
        {title}
    </Title>
  )
};

export const Reverse = () => {
  const title = text('Title', 'Title');
  return (
    <Title reverse>
        {title}
    </Title>
  )
};

Default.story = {
  name: "default",
  decorators: [withInfo]
};

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