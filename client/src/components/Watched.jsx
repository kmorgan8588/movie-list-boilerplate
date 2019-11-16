import React from 'react';

const Watched = ( {toggle} ) => (
    <button className='switch' onClick={()=> toggle(true)}> Watched </button>
)

export default Watched;