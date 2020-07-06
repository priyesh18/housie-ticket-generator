import React from 'react';
import './main-page.styles.scss';

import Callout from '../../components/callout/callout.component';
import Canvas from '../../components/canvas/canvas.component';

const MainPage = () => (

            <div className="container">
                <Callout />
                <Canvas />
            </div>
)



export default MainPage;