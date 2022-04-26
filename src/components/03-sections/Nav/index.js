import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faClipboard, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faComment as fasComment,
  faClipboard as fasClipboard,
  faMessage as fasMessage,
  faUser as fasUser,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.scss';

const Item = ({ data }) => {
  const { isActive, icon, iconAlt, text } = data;

  const chooseIcon = (iconName) => {
    switch (iconName) {
      case 'comment':
        return faComment;
      case 'scomment':
        return fasComment;
      case 'clipboard':
        return faClipboard;
      case 'sclipboard':
        return fasClipboard;
      case 'message':
        return faMessage;
      case 'smessage':
        return fasMessage;
      case 'user':
        return faUser;
      case 'suser':
        return fasUser;
      default:
        return null;
    }
  };

  return (
    <div className={styles.item}>
      <button className={clsx(styles.button, isActive && styles.active)} type="button">
        <div className={styles.icon}>
          <FontAwesomeIcon icon={chooseIcon(!isActive ? icon : iconAlt)} className={styles.svg} />
        </div>
        <div className={styles.text}>{text}</div>
      </button>
    </div>
  );
};

const Nav = ({ data }) => {
  return (
    <section className={styles.section}>
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
    </section>
  );
};

export default Nav;
