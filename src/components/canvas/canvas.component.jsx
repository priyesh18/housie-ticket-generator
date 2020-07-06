import React from 'react';
import './canvas.styles.scss';
import Ticket from '../ticket/ticket.component';

import data from '../../image-data/image-data.json';

class Canvas extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data, 
            count: 2
           }
    }
    onCountChange = (e) => (
        this.setState({count: e.target.value})

    )
    createTickets() {
        let elem = [];
        for (let i = 0; i < this.state.count; i++) {
            elem.push(<Ticket key={i} items={this.state.data}/>)          
        }
        return elem;
    }
    

    render() {
        return (
            <div>
                <h3>Generate Tickets</h3>
                <div className="input-box">
                    Enter number of tickets: 
                    <input type="number" placeholder="2" onChange={this.onCountChange} step="2"/>
                    <button onClick={() => (window.print())}>Print</button>

                </div>
            <div className="canvas">
                {
                    this.createTickets()
                }
       
            </div>
       

    </div>
        )
    }
}


export default Canvas;