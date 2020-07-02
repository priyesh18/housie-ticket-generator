import React from 'react';
import './ticket.styles.scss';

import TicketSection from '../ticket-section/ticket-section.component'

const Ticket = ({ items }) => (
    <div className="layout">Ticket
    {console.log(items)}
    {items.map(({name, id, items, color}) => {
        return (
            <TicketSection key={id} name={name} color={color} sectionItems={items}/>
        )
    })}
    </div>
    
);

export default Ticket;