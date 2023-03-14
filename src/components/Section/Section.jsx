import { SectionMain, Title } from './Section.styled';
import PropTypes from 'prop-types';

export function Section ({ title, children }) {
  return (
    <SectionMain>
      <Title>{title}</Title>
      {children}
    </SectionMain>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


