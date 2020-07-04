import React from 'react';
import './callout.styles.scss';
import TicketItem from '../ticket-item/ticket-item.component';

const Callout = ( {onCalloutClick, itemDetails}) => {
    console.log(itemDetails);
    return (
        // <TicketItem/>
        <div className="callout">
            <div>
            <TicketItem imageUrl={itemDetails.path} name={itemDetails.name}/>

            </div>
            <button onClick={onCalloutClick}>Callout Next</button>
    
        </div>
    );
}

export default Callout;