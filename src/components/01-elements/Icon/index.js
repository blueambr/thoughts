import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faClipboard, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faComment as fasComment,
  faClipboard as fasClipboard,
  faMessage as fasMessage,
  faUser as fasUser,
} from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon }) => {
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

  return <FontAwesomeIcon icon={chooseIcon(icon)} />;
};

export default Icon;
