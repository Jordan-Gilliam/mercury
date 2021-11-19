import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/components/Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

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

const PrimaryButton: Story = args => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <div>
      <Button color="primary" size="large" {...args}>
        This is a call to action button{' '}
        <span>
          <ArrowRightIcon />
        </span>
      </Button>
    </div>
  </div>
);

// const SecondaryButton: Story = args => (
//   <Button color="secondary" size="small" {...args}>
//     Secondary
//   </Button>
// );
// const WarnButton: Story = args => (
//   <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
//     <div>
//       <Button color="warn" size="small" {...args}>
//         Warning!!
//       </Button>
//     </div>
//     <div>
//       <Button color="error" size="small" {...args}>
//         Error!!!!
//       </Button>
//     </div>
//     <div>
//       <Button color="error" icon {...args}>
//         <PlusIcon />
//       </Button>
//     </div>
//   </div>
// );

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = PrimaryButton.bind({});
// export const Secondary = SecondaryButton.bind({});
// export const Alert = WarnButton.bind({});

Primary.args = {};
// Secondary.args = {};
// Alert.args = {};
