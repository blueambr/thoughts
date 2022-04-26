import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import { useState } from 'react';
import Button from '@/elements/Button';
import Icon from '@/elements/Icon';
import Text from '@/elements/Text';
import styles from './Modal.module.scss';

const Modal = ({ data, setOpenModal, thoughts, setThoughts }) => {
  const { list } = data;

  const [newThought, setNewThought] = useState({});
  const [error, setError] = useState(false);

  const handleIconClick = (icon) => {
    newThought.icon = icon;

    setNewThought({ ...newThought });
  };

  const handleBlur = (e, item) => {
    if (item.type === 'title') {
      newThought.id = nanoid();
      newThought.title = { text: e.target.value, tag: 'h3' };
      newThought.date = {
        text: `<time datetime='${format(new Date(), 'yyyy-MM-dd HH:mm')}'>${format(
          new Date(),
          'MMMM d, y h:mm aaa'
        )}</time>`,
        tag: 'span',
        modificator: 'small',
      };

      setNewThought({ ...newThought });
    }

    if (item.type === 'evidence') {
      newThought.content = [
        {
          id: nanoid(),
          title: item.title,
          text: {
            text: e.target.value,
            tag: 'div',
            modificator: 'rte',
          },
        },
      ];

      setNewThought({ ...newThought });
    }
  };

  const handleSubmit = () => {
    if (newThought.id && newThought.icon && newThought.content) {
      setThoughts([...thoughts, newThought]);
      setOpenModal(false);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.modal}>
      <button className={styles.close} type="button" title="Close the modal" onClick={() => setOpenModal(false)}>
        <Icon icon="xmark" />
      </button>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {list.map((item) => (
            <li className={styles.item} key={item.id}>
              <div className={styles.title}>
                <Text {...item.title} />
              </div>
              {item.icons ? (
                <ul className="columns is-mobile">
                  {item.icons.map((subitem) => (
                    <li className="column is-one-fifth" key={subitem}>
                      <button
                        className={clsx(styles['icon-button'], newThought.icon === subitem && styles.active)}
                        type="button"
                        onClick={() => handleIconClick(subitem)}
                      >
                        <div className={styles.icon}>
                          <Icon icon={subitem} />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <textarea className={styles.textarea} onBlur={(e) => handleBlur(e, item)} />
              )}
            </li>
          ))}
        </ul>
        <div className={styles.button}>
          <Button text="Done" type="2" onClick={handleSubmit} />
          {error && (
            <div className={styles.error}>Choose how you feel and fill out all the fields to proceed, please.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
