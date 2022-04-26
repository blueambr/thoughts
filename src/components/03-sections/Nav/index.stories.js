import data from '/src/lib/pages/index.json';
import Nav from './index';

export default {
  title: 'Sections/Nav',
  component: Nav,
};

export const Default = () => <Nav data={data.nav} />;
Default.storyName = 'Nav';
