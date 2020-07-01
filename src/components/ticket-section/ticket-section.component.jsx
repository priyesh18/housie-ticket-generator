import React from 'react';
import './ticket-section.styles.scss';
import TicketItem from '../ticket-item/ticket-item.component';

const TicketSection = ({name, sectionItems}) => (
    <div className="section">
        <div className="section-title">{name}</div>
        { sectionItems.map(({id, name, imageUrl}) => {
            return (
                <TicketItem key={id} imageUrl={imageUrl} name={name}/>

            )
        }) }
    </div>
);

export default TicketSection;