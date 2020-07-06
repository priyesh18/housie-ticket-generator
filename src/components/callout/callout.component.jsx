import React from 'react';
import './callout.styles.scss';
import data from '../../image-data/image-data.json';

import TicketItem from '../ticket-item/ticket-item.component';


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
        if(prevPool.length === 0) return;
        let selectedIndex = Math.floor(Math.random()*prevPool.length); // use pool from state in future
        let selectedItem = prevPool[selectedIndex];
        prevPool.splice(selectedIndex, 1);
        this.setState({
            data: [...this.state.data, selectedItem]
            .sort(
                (item1, item2)=> (item1.id.localeCompare(item2.id))
                ),
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
        <h2>Board (Remaining: {this.state.pool.length})</h2>
            <p>(Items sorted by category and alphabetically)</p>
            <div className="board">
                {
                    this.state.data.map(
                        ({id, name, path}) => {
                            return (
                                <TicketItem key={name+id} imageUrl={path} name={name}/>
                
                            )
                        })
                }

            </div>
            
        </div>
    
            )
        }
    }


export default Callout;