import React from 'react';

const Stars = (rating) => {
    const result = [];
    for (let index = 0; index < rating; index++) {
        result.push((
            <li className={index === 0 ? 'pl-0' : 'pl-2'}>
                {rating - index >= 1 && <i className="fas fa-star"></i>}
                {rating - index < 1 && <i className="fas fa-star-half-alt"></i>}
            </li>
        ));
    }
    return result;
}

export default Stars;
