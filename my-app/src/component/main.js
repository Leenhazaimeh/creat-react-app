import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json';
class Main extends React.Component{

    
    render(){
        
        return(
            Data.map((value)=>{
                return(
                <HornedBeast 
                title= {value.title}
                img = {value.image_url}
                keyword={value.keyword}
                description={value.description}
                horns={value.horns}
                />
                )
            })
        )
    }
}


export default Main;
