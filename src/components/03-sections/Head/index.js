import clsx from 'clsx';
import Text from '@/elements/Text';
import Card from '@/modules/Card';
import styles from './Head.module.scss';

const Head = ({ data, openThought, setOpenThought }) => {
  const { title } = data;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={clsx(styles.title, openThought !== null && 'is-hidden')}>
            <Text {...title} />
          </div>
          <div className={clsx(styles.card, openThought === null && 'is-hidden')}>
            {openThought && (
              <Card data={openThought} openThought={openThought} setOpenThought={setOpenThought} placedInHead />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
