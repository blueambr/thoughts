import data from '/src/lib/pages/index.json';
import Head from './index';

export default {
  title: 'Sections/Head',
  component: Head,
};

export const Default = () => <Head data={data.head} openThought={null} />;
Default.storyName = 'Head';
