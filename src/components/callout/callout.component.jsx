import React from 'react';
import './callout.styles.scss';
import TicketItem from '../ticket-item/ticket-item.component';
// import html2canvas from 'html2canvas';
import Example from '../example.component'


// class Callout extends React.Component {
//     constructor(props) {
        
//         super(props);
//         console.log("hello");
//     }

//         render () {
//             return (
//                 <div className="callout">
//                 <div>
//                 <TicketItem imageUrl={this.props.itemDetails.path} name={this.props.itemDetails.name}/>
    
//                 </div>
//                 <button onClick={this.props.onCalloutClick}>Callout Next</button>
//                 <Example/>
//                 {/* <button onClick={() => {
//                     html2canvas(document.body)
//                     .then(canvas => {
//                         canvas.style.position = 'fixed';
//                                                 canvas.style.top = '0';
//                                                 canvas.style.left = '0';
//                                                 canvas.style.opacity = '0';
//                                                 canvas.style.transform = 'scale(0)';
//                                                 canvas.style.zIndex = '99999999';
//                     })
//                 }
//                     }> <WhatsappIcon/> </button> */}
        
//             </div>
        
//             )
//         }
//     }

const Callout = ( {onCalloutClick, itemDetails}) => {
    console.log(itemDetails);
    return (
        // <TicketItem/>
        <div className="callout">
            <div>
            <TicketItem imageUrl={itemDetails.path} name={itemDetails.name}/>

            </div>
            <button onClick={onCalloutClick}>Callout Next</button>
            
    
        </div>
    );
}

export default Callout;