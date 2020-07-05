import React from 'react';
import './callout.styles.scss';
import TicketItem from '../ticket-item/ticket-item.component';
// import html2canvas from 'html2canvas';
import Example from '../example.component'
import data from '../../image-data/image-data.json';



class Callout extends React.Component {
    constructor() {
        
        super();
        this.state = {
            data: [], 
            pool: data.map((section) => (section.items)).flat(), 
            selected: {name: '', path: ''}
        };
    }
    onCalloutClick = () => {
        let prevPool = this.state.pool;
        let selectedIndex = Math.floor(Math.random()*prevPool.length); // use pool from state in future
        let selectedItem = prevPool[selectedIndex];
        prevPool.splice(selectedIndex, 1);
        this.setState({
            data: [...this.state.data, selectedItem],
            pool: prevPool, 
            selected: selectedItem
        });
            
    }

    render () {
        return (
            <div className="callout">
            <div>
            <TicketItem imageUrl={this.state.selected.path} name={this.state.selected.name}/>

            </div>
            <button onClick={this.onCalloutClick}>Callout Next</button>
            
        </div>
    
            )
        }
    }

// const Callout = ( {onCalloutClick, itemDetails}) => {
//     console.log(itemDetails);
//     return (
//         // <TicketItem/>
//         <div className="callout">
//             <div>
//             <TicketItem imageUrl={itemDetails.path} name={itemDetails.name}/>

//             </div>
//             <button onClick={onCalloutClick}>Callout Next</button>
            
    
//         </div>
//     );
// }

export default Callout;