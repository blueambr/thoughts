import Button from './index';

export default {
  title: 'Elements/Button',
  component: Text,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    text: { name: 'Text', control: 'text' },
    type: { name: 'Type', control: 'boolean', options: [1, 2], default: 1 },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
  text: 'Rounded button',
  type: 2,
};
