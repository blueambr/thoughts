import data from '/src/lib/pages/index.json';
import Thoughts from './index';

export default {
  title: 'Sections/Thoughts',
  component: Thoughts,
};

export const Default = () => <Thoughts data={data.thoughts} />;
Default.storyName = 'Thoughts';
