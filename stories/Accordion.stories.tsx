import React from 'react';
import { Meta } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../src/components/Accordion';
import { Text } from '../src/components/Text';
import { Box } from '../src/components/Box';

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
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

const BaseAccordion = () => (
  <Box css={{ width: 600 }}>
    <Accordion type="single">
      <AccordionItem value="accordion-one">
        <AccordionTrigger>
          <Text size="7" css={{ fontWeight: 700 }}>
            Accordion one
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px', p: '$3' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accordion-two">
        <AccordionTrigger>
          <Text size="7" css={{ fontWeight: 700 }}>
            Accordion two
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px', p: '$3' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accordion-three">
        <AccordionTrigger>
          <Text size="7" css={{ fontWeight: 700 }}>
            Accordion three
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px', p: '$3' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accordion-four">
        <AccordionTrigger>
          <Text size="7" css={{ fontWeight: 700 }}>
            Accordion four
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px', p: '$3' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Box>
);
export const Base = BaseAccordion.bind({});
// export const Hover = HoverCard.bind({});
// export const Transparent = TransparentCard.bind({});

// Primary.args = {};
