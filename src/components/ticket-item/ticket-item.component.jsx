import React from 'react';
import './ticket-item.styles.scss';

const TicketItem = ({ imageUrl, name}) => (
    <div className="item-container">
        <div className="item-image">
            <img src={`${"/images/"+imageUrl}`} alt=""/>
        </div>
        <div>{ name }</div>
    </div>
);

export default TicketItem;