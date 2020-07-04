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
            pool: data.map((section) => (section.items)).flat(), 
            selected: {name: '', imageUrl: ''}
        };
        
        
    }
    onCalloutClick = () => {
        let prevPool = this.state.pool;
        let selectedIndex = Math.floor(Math.random()*prevPool.length); // use pool from state in future
        let selectedItem = prevPool[selectedIndex];
        prevPool.splice(selectedIndex, 1);
        this.setState({pool: prevPool, selected: selectedItem});
            
    }

    componentDidMount() {
        this.onCalloutClick();
        // let itemPool = this.state.data.map((section) => (section.items)).flat();
        // let selectedIndex = Math.floor(Math.random()*itemPool.length); // use pool from state in future
        // let selectedItem = itemPool[selectedIndex];
        // itemPool.splice(selectedIndex, 1);
        // this.setState({pool: itemPool, selected: selectedItem});
  
    }
    

    render() {
        console.log(this.state.pool);
        return (
            <div className="background">
        <Ticket items={this.state.data}/>
        <Callout onCalloutClick={this.onCalloutClick} itemDetails={this.state.selected} />
        
        
        
        

    </div>
        )
    }
}


export default MainPage;