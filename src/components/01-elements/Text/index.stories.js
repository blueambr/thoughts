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
    tag: { name: 'Tag', control: 'radio', options: ['h1', 'h3', 'div', 'span'] },
    modificator: { name: 'Tag', control: 'radio', options: ['small', 'rte'] },
  },
};

const Template = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.storyName = 'h1';
H1.args = {
  text: 'h1',
  tag: 'h1',
};

export const H3 = Template.bind({});
H3.storyName = 'h3';
H3.args = {
  text: 'h3',
  tag: 'h3',
};

export const Small = Template.bind({});
Small.storyName = 'span (small)';
Small.args = {
  text: 'span (small)',
  tag: 'span',
  modificator: 'small',
};

export const RTE = Template.bind({});
RTE.args = {
  text: '<p>RTE</p>',
  tag: 'div',
  modificator: 'rte',
};
