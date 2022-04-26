import clsx from 'clsx';
import styles from './Text.module.scss';

const Text = ({ text, tag, modificator }) => {
  const Tag = tag;

  return <Tag className={clsx(styles.text, styles[modificator])} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Text;
