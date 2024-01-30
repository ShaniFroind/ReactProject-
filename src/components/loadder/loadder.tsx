import React, { FC } from 'react';
import './loadder.scss';
import Spinner from 'react-bootstrap/Spinner';
import { BeatLoader, ClimbingBoxLoader, GridLoader, ScaleLoader } from 'react-spinners';

interface LoadderProps {
  titel: string
}

const Loadder: FC<LoadderProps> = (props: LoadderProps) => {
  return <div className="loadder">

    <ScaleLoader
      color="#3498db"
      height={100}
      speedMultiplier={1}
      width={0.5}
    
    />
    {props.titel}

  </div>
};



export default Loadder;
