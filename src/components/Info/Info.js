import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {info} from '../../data/dataStore';

const {title, content, image} = info;

const Info = () => (
  <Container>
    <Hero titleText={title} imageImage={image} />
    <div>{content}</div>
  </Container>
);

Info.protoTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  image: PropTypes.node,
};

export default Info;