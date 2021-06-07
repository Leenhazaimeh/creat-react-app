import React from 'react';

class Footer extends React.Component {
    
    render(){
        const name = 'Leen hazaimeh';
        return(
            <footer>
                <span>
                   Author: {name}
                </span>
            
            </footer>
        )
    }
}

export default Footer;