import React from 'react';
import './ticket-item.styles.scss';

const TicketItem = ({ imageUrl, name}) => (
    <div className="item-container">
        <div className="box"></div>
        <div className="item-image">
            <img src={'housie-ticket-generator/'+`${imageUrl}`} alt=""/>
        </div>
        <div className="item-name">{ name }</div>
    </div>
);

export default TicketItem;