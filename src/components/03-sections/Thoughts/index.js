import clsx from 'clsx';
import Thought from '@/modules/Thought';
import styles from './Thoughts.module.scss';

const Thoughts = ({ data, openThought, setOpenThought }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={clsx(styles.wrapper, 'section')}>
          <ul className={styles.list}>
            {data.map((item) => (
              <li className={styles.item} key={item.id}>
                <Thought data={item} openThought={openThought} setOpenThought={setOpenThought} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
