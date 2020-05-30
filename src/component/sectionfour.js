import React from 'react';
import ControlledExpansionPanels from './form';
import FormApp from './formApp';

function SectionFour() {

    return (

        <section className="sectionfour">
        <div className="container p-5">
          <ControlledExpansionPanels />
          <FormApp />
        </div>
      </section>

    );

}

export default SectionFour;