import clsx from 'clsx';
import styles from './Button.module.scss';

const Text = ({ text, type = 1, onClick }) => {
  return (
    <button className={clsx(styles.button, styles[`type_${type}`])} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Text;
