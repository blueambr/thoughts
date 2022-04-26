import Text from '@/elements/Text';
import styles from './Head.module.scss';

const Head = ({ data }) => {
  const { title } = data;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <Text {...title} />
        </div>
      </div>
    </section>
  );
};

export default Head;
