import React from 'react';

const ToWatch = ({ toggle }) => (
    <button className='switch' onClick={()=> toggle(false)}> To Watch </button>  
);

export default ToWatch;