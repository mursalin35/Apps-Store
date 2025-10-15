import React from 'react';

const Description = ({description}) => {
    return (
        <div className='mt-8'>
            <h4 className='font-semibold text-[1.3rem]'>Description</h4>
            <p className='mt-3 text-sm text-gray-500'>{description}</p>
        </div>
    );
};

export default Description;