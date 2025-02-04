import React, { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';
import Button from 'src/components/common/Button';

const MapRadius = () => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <img src="src/assets/images/pin_map.png"></img>
      </Panel>
    </div>
  );
};

export default MapRadius;
