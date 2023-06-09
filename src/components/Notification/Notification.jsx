import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <span>{message}</span>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
