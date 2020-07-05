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
        console.log(this.state.pool);
        return (
            <div className="background">
        <Ticket items={this.state.data}/>
        <Callout />
        
        
        
        

    </div>
        )
    }
}


export default MainPage;