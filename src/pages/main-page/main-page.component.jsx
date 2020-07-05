import React from 'react';
import './main-page.styles.scss';
import Ticket from '../../components/ticket/ticket.component';

import data from '../../image-data/image-data.json';
import Callout from '../../components/callout/callout.component';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data, 
           }
        
        
    }


    render() {
        return (
            <div className="container">
                <Callout />
                <div className="canvas">
                    <Ticket items={this.state.data}/>
                    <Ticket items={this.state.data}/>
                    <Ticket items={this.state.data}/>
                    {/* <Ticket items={this.state.data}/> */}

                </div>

            </div>
        )
    }
}


export default MainPage;