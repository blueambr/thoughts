import Text from './index';

export default {
  title: 'Elements/Text',
  component: Text,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    text: { name: 'Text', control: 'text' },
    tag: { name: 'Tag', control: 'radio', options: ['h1'] },
  },
};

const Template = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.storyName = 'h1';
H1.args = {
  text: 'h1',
  tag: 'h1',
};
