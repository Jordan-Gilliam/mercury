import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from '../src/components/Text';

const meta: Meta = {
  title: 'Text',
  component: Text,
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

const Texts: Story = (args) => (
  <>
    <Text
      size="9"
      as="h1"
      variant="purple"
      gradient
      css={{
        fontWeight: 500,
        lineHeight: '68px',
        WebkitBackgroundClip: 'text',
      }}
    >
      Heading 1{' '}
    </Text>
    <Text
      size="8"
      as="h2"
      variant="bronze"
      gradient
      css={{
        fontWeight: 500,
        lineHeight: '68px',
        WebkitBackgroundClip: 'text',
      }}
    >
      Heading 2{' '}
    </Text>
    <Text
      size="7"
      as="h3"
      variant="indigo"
      gradient
      css={{
        fontWeight: 500,
        lineHeight: '68px',
        WebkitBackgroundClip: 'text',
      }}
    >
      Heading 3{' '}
    </Text>
    <Text
      size="3"
      as="p"
      variant="gray"
      gradient
      css={{
        fontWeight: 500,
        lineHeight: '68px',
        WebkitBackgroundClip: 'text',
      }}
    >
      Paragraph{' '}
    </Text>
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Texts.bind({});

Default.args = {};
