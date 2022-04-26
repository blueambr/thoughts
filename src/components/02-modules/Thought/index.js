import clsx from 'clsx';
import Text from '@/elements/Text';
import Card from '@/modules/Card';
import styles from './Thought.module.scss';

const Thought = ({ data, openThought, setOpenThought }) => {
  const { id, content } = data;

  return (
    <div className={styles.thought}>
      <div className={styles.card}>
        <Card data={data} openThought={openThought} setOpenThought={setOpenThought} />
      </div>
      <div className={clsx(styles.content, (openThought === null || openThought.id !== id) && 'is-hidden')}>
        <ul className={styles.list}>
          {content.map((item) => (
            <li className={styles.item} key={item.id}>
              <div className={styles.item__title}>
                <Text {...item.title} />
              </div>
              <div className={styles.item__text}>
                <Text {...item.text} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Thought;
