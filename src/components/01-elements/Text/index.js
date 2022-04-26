import styles from './Text.module.scss';

const Text = ({ text, tag }) => {
  const Tag = tag;

  return <Tag className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Text;
