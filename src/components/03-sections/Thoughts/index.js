import clsx from 'clsx';
import Text from '@/elements/Text';
import Thought from '@/modules/Thought';
import styles from './Thoughts.module.scss';

const Thoughts = ({ data, openThought, setOpenThought }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={clsx(styles.wrapper, 'section')}>
          {data.length ? (
            <ul className={styles.list}>
              {data.map((item) => (
                <li className={styles.item} key={item.id}>
                  <Thought data={item} openThought={openThought} setOpenThought={setOpenThought} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.callout}>
              <div className={styles.callout__title}>
                <Text text="This is your <br /> Thoughts diary" tag="h2" />
              </div>
              <div className={styles.callout__text}>
                <Text text="You can write your thoughts here" tag="div" modificator="rte" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
