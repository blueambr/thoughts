import data from '/src/lib/pages/thoughts.json';
import Thoughts from './index';

export default {
  title: 'Sections/Thoughts',
  component: Thoughts,
};

export const Default = () => <Thoughts data={data.thoughts} openThought={null} />;
Default.storyName = 'Thoughts';
