import React from 'react';
import {useSelector} from 'react-redux';

function Offer() {

const serviceType = useSelector((state) => state.serviceInfoReducer.fullService)


  return (
    <>
      {serviceType && (<div>{serviceType.title}</div>)}
    </>
  );
}

export default Offer;
