import React from 'react';

const EmpleadoAvatar = (props) => {
    return (
        <div>
            <img src={props.pic} alt="Image Not Found" width={100} />
        </div>
    );
};

export default EmpleadoAvatar;