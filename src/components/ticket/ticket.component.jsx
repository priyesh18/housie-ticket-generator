import React from 'react';
import './ticket.styles.scss';

import TicketSection from '../ticket-section/ticket-section.component'

const Ticket = ({ items }) => (
    <div className="layout">Ticket
    {console.log(items)}
    {items.map(({section, id, items}) => {
        return (
            
            <TicketSection key={id} name={section} sectionItems={items}/>
        )
    })}
    </div>
    
);

export default Ticket;