import React, { useState, useEffect } from 'react';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import { getSections } from '../api/sections';

const Forms = () => {
  const [sections, setSections] = useState([]);

  // Execute just once
  useEffect(() => {
    getSectionsFromApi();
  }, []);

  const getSectionsFromApi = async () => {
    const { data } = await getSections();
    const sections = dataOrganized2(data.data);
    setSections(sections);
  };

  const dataOrganized2 = (data) => {
    let sections = { ...data.seccion };
    const variables = data.variable;

    Object.keys(variables).forEach((variable) => {
      const currentVariable = variables[variable];
      const variableSectionType = currentVariable.seccion;
      const selectedSection = ['seccion' + variableSectionType];
      let currentSection = sections['seccion' + variableSectionType];

      if (currentSection && currentSection.variables) {
        sections = {
          ...sections,
          [selectedSection]: {
            ...sections[selectedSection],
            variables: [...currentSection.variables, currentVariable],
          },
        };
      } else {
        sections = {
          ...sections,
          [selectedSection]: {
            ...sections[selectedSection],
            variables: [currentVariable],
          },
        };
      }
    });

    return sections;
  };

  return <ControlledExpansionPanels sections={sections} />;
};

export default Forms;
