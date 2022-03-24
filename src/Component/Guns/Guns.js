import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = ({countCart}) => {
    const [guns, setGuns] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res=> res.json())
        .then(data => setGuns(data))
    },[])
    return (
        <div className='container mt-5'>
            <div className="row g-3">
            {
                guns.map(gun=> <Gun gun={gun} key={gun.id} countCart={countCart}></Gun>)
            }
            </div>
        </div>
    );
};

export default Guns;