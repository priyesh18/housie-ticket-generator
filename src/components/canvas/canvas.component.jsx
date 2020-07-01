import React from 'react';
import './canvas.styles.scss';
import Ticket from '../ticket/ticket.component';

import data from '../../image-data/image-data.json';

class Canvas extends React.Component {
    constructor() {
        super();
        this.state = {data};
    }
    

    render() {
        return (
            <div className="background">
        <Ticket items={data}/>

    </div>
        )
    }
}


export default Canvas;