import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { faq } from '../../data/dataStore';

const {title, content, image } = faq;

const FAQ = () => (
  <Container>
    <Hero titleText={title} imageImage={image} />
    <div>{content}</div>
  </Container>
);

FAQ.protoTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  image: PropTypes.node,
};

export default FAQ;