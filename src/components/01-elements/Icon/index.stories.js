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
    icon: {
      name: 'Icon',
      control: 'radio',
      options: [
        'comment',
        'chevron-right',
        'clipboard',
        'cloud',
        'cloud-rain',
        'cloud-sun',
        'message',
        'rainbow',
        'sun',
        'user',
      ],
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Icon';
Default.args = {
  icon: 'comment',
};
