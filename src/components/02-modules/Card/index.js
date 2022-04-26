import clsx from 'clsx';
import Icon from '@/elements/Icon';
import Text from '@/elements/Text';
import styles from './Card.module.scss';

const Card = ({ data, openThought, setOpenThought, placedInHead }) => {
  const { icon, title, date } = data;

  const handleClick = () => {
    if (!placedInHead) {
      setOpenThought(data);
    } else {
      setOpenThought(null);
    }

    if (window) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      <div className={clsx(styles.arrow, styles.back, !placedInHead && 'is-hidden')}>
        <Icon icon="chevron-right" />
      </div>
      <div className={styles.icon}>
        <Icon icon={icon} />
      </div>
      <div className={clsx(styles.card, openThought === null && styles.alternate)}>
        <div className={styles.text}>
          <div className={styles.title}>
            <Text {...title} />
          </div>
          <div className={styles.date}>
            <Text {...date} />
          </div>
        </div>
        <div className={clsx(styles.arrow, placedInHead && 'is-hidden')}>
          <Icon icon="chevron-right" />
        </div>
      </div>
    </button>
  );
};

export default Card;
