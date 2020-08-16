import React from 'react';
import Container from '../Container/Container';
import {listData, pageContents} from '../../data/dataStore.js';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero titleText={pageContents.infoTitle}
      image={listData.imageInfo}>
    </Hero>
    {pageContents.infoContent}
  </Container>
);

export default Info;