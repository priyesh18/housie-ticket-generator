import React from 'react';
import './ticket-section.styles.scss';
import TicketItem from '../ticket-item/ticket-item.component';

const TicketSection = ({name, color, sectionItems}) => (
    <div className="section"
        style={{ backgroundColor: `light${color}`}}
    >
        <div className="section-title">{name}</div>
        { 
        sectionItems.sort(() => Math.random() - Math.random()).slice(0,4).map(
            ({id, name, path}) => {
                return (
                    <TicketItem key={id} imageUrl={path} name={name}/>
    
                )
            }) }
        </div>
        )
      

export default TicketSection;