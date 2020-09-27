import React, { Fragment } from 'react';
import ResourcesSection from '../../layout/ResourcesSection';
import { resourcesObjOne, resourcesObjTwo, resourcesObjThree } from './Data';
import Pricing from '../../layout/Pricing';

function Resources() {
  return (
    <Fragment>
      <ResourcesSection {...resourcesObjOne} />
      <Pricing />
      <ResourcesSection {...resourcesObjTwo} />
      <ResourcesSection {...resourcesObjThree} />
    </Fragment>
  );
}

export default Resources;
