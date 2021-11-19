import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from '../src/components/Card';
import { Heading } from '../src/components/Heading';
import { Text } from '../src/components/Text';
import { Flex } from '../src/components/Flex';
import { Box } from '../src/components/Box';
import { EyeOpenIcon } from '@radix-ui/react-icons';

const meta: Meta = {
  title: 'Card',
  component: Card,
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

const BaseCard: Story = args => (
  <Box css={{ width: 250 }}>
    <Card css={{ p: '$3' }}>
      <Heading css={{ mb: '$2' }}>Developer Productivity</Heading>
      <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
        List of software, shortcuts, and tooling that I simply cannot live
        without
      </Text>
      <Flex direction="row" align="center" gap="2" css={{ pt: '$2' }}>
        <EyeOpenIcon css={{ color: '$slate11' }} />
        <Text size="1">369</Text>
      </Flex>
    </Card>
  </Box>
);

const HoverCard: Story = args => (
  <Box css={{ width: 250 }}>
    <Card variant="hover" css={{ p: '$3' }}>
      <Heading css={{ mb: '$2' }}>Developer Productivity</Heading>
      <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
        List of software, shortcuts, and tooling that I simply cannot live
        without
      </Text>
      <Flex direction="row" align="center" gap="2" css={{ pt: '$2' }}>
        <EyeOpenIcon css={{ color: '$slate11' }} />
        <Text size="1">369</Text>
      </Flex>
    </Card>
  </Box>
);

const TransparentCard: Story = args => (
  <Box css={{ width: 250 }}>
    <Card variant="transparent" css={{ p: '$3' }}>
      <Heading css={{ mb: '$2' }}>Developer Productivity</Heading>
      <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
        List of software, shortcuts, and tooling that I simply cannot live
        without
      </Text>
      <Flex direction="row" align="center" gap="2" css={{ pt: '$2' }}>
        <EyeOpenIcon css={{ color: '$slate11' }} />
        <Text size="1">369</Text>
      </Flex>
    </Card>
  </Box>
);

export const Base = BaseCard.bind({});
export const Hover = HoverCard.bind({});
export const Transparent = TransparentCard.bind({});

// Primary.args = {};
