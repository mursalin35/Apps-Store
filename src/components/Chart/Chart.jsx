import React from 'react';

const Chart = ({rating}) => {
    const {name, count} = rating;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{count}</h1>
        </div>
    );
};

export default Chart;