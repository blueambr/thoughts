import Icon from './index';

export default {
  title: 'Elements/Icon',
  component: Icon,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    icon: { name: 'Icon', control: 'radio', options: ['comment', 'clipboard', 'message', 'user'] },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Icon';
Default.args = {
  icon: 'comment',
};
