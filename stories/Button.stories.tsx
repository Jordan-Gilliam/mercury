import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Primary: Story = (args) => (
  <Button color="primary" {...args}>
    Primary
  </Button>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Primary.bind({});

Default.args = {};
