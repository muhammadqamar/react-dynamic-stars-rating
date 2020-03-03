import * as React from 'react';
import Starsvg from './starsvg'
class CustomStar extends React.Component<any> {
    state={
        ciel_value : 0,
        floor_value:0,
        gradient_ceil:"30%",
        gradient_floor:"70%"
        
    }
  

       //populating year filter dynamically from json
       static getDerivedStateFromProps(nextProps,state){
        if(nextProps.rating > 0){
          
            return { 
                ciel_value : Math.ceil(nextProps.rating),
                floor_value: Math.floor(nextProps.rating),
                gradient_ceil:(Math.ceil(nextProps.rating)-nextProps.rating).toFixed(2).toString().split('.')[1]+"%" ,
                gradient_floor:(1-(Math.ceil(nextProps.rating)-nextProps.rating)).toFixed(2).toString().split('.')[1]+"%" 

            }}
         else{return {  ciel_value : 0 , floor_value:0} }
        }


    render(){
    
        return (
            <>
    <div>{this.props.rating}</div>
           {
               this.state.ciel_value !=0 ? (
               (()=>{
                   
                   var starsArray = []
                   for(var x =1 ;x<=5 ; x++){
                       if(x <= this.state.floor_value){
                    starsArray.push(<span className="activeStart"></span>)
                       }
                      
                        if(x == this.state.floor_value && x <= this.state.ciel_value && x != 5){
                        starsArray.push(<span className="targetstar"><Starsvg    gradient_ceil={this.state.gradient_ceil} gradient_floor={this.state.gradient_floor}/> </span>)
                       }
                        if(x > this.state.floor_value && x != 5){
                        starsArray.push(<span className="nonactiveStart"></span>)
                       }
                      
                   }
                   return starsArray

               })()
               ):(
                   <>
              <span className="nonactiveStart"></span>
              <span className="nonactiveStart"></span>
              <span className="nonactiveStart"></span>
              <span className="nonactiveStart"></span>
              <span className="nonactiveStart"></span>
              </>
               )
           }
           </>
        )
    }
}
export default CustomStar