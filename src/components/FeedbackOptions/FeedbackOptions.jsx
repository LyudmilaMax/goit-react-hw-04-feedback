import { BoxButton, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BoxButton>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </BoxButton>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ option: PropTypes.string.isRequired })
  ).isRequired,
};
