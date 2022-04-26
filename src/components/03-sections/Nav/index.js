import clsx from 'clsx';
import Icon from '@/elements/Icon';
import Text from '@/elements/Text';
import styles from './Nav.module.scss';

const Item = ({ data }) => {
  const { isActive, icon, iconAlt, text } = data;

  return (
    <div className={styles.item}>
      <button className={clsx(styles.button, isActive && styles.active)} type="button">
        <div className={styles.icon}>
          <Icon icon={!isActive ? icon : iconAlt} />
        </div>
        <div className={styles.text}>
          <Text {...text} />
        </div>
      </button>
    </div>
  );
};

const Nav = ({ data }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <ul className="columns is-mobile">
            {data.map((item) => (
              <li className="column is-3" key={item.id}>
                <Item data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Nav;
