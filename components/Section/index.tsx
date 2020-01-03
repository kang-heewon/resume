import React from 'react';
import './index.scss';

const Section: React.FC = props => {
  return (
    <section id={props.id} className={'section-wrapper ' + props.className} data-aos={props.aos}>
      {props.children}
    </section>
  );
};

export default Section;
