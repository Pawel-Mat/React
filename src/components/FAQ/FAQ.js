import React from 'react';
import Container from '../Container/Container';
import {listData, pageContents} from '../../data/dataStore.js';
import Hero from '../Hero/Hero.js';

const FAQ = () => (
  <Container>
    <Hero titleText={pageContents.FAQTitle}
      image={listData.imageFAQ}>
    </Hero>
    <p>{pageContents.FAQContent}</p>
  </Container>
);

export default FAQ;