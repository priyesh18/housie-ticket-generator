import React from 'react';
import './ticket-item.styles.scss';

const TicketItem = ({ imageUrl, name}) => (
    <div className="item-container">
        <div className="item-image">
            <div className="box"></div>
                <img src={`/housie-ticket-generator/${imageUrl}`} alt=""/>
    
        </div>
        <div className="item-name">{ name.toLowerCase() }</div>
    </div>
);

export default TicketItem;