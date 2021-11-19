import * as React from 'react';
import { styled, CSS } from '@stitches/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUpIcon } from '@radix-ui/react-icons';

// Create Accordion Root and forward references + primitive types to consumers
const StyledAccordion = styled(AccordionPrimitive.Root, {});
type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };
export const Accordion = React.forwardRef<
  React.ElementRef<typeof StyledAccordion>,
  AccordionProps
>(({ children, ...props }, forwardedRef) => (
  <StyledAccordion
    ref={forwardedRef}
    {...props}
    {...(props.type === 'single' ? { collapsible: true } : {})}
  >
    {children}
  </StyledAccordion>
));

const StyledItem = styled(AccordionPrimitive.Item, {
  borderBottom: '1px solid $colors$slate6',
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  p: '$2',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  color: '$hiContrast',
  width: '100%',

  '@hover': {
    '&:hover': {
      cursor: 'pointer',
    },
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS };

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}

      <ChevronUpIcon height="50px" width="50px" />
    </StyledTrigger>
  </StyledHeader>
));

const StyledContent = styled(AccordionPrimitive.Content, {
  p: '$3',
});

export const AccordionItem = StyledItem;
export const AccordionContent = StyledContent;
