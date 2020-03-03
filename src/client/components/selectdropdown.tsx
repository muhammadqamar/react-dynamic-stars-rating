import * as React from 'react';


class Selectdropdown extends React.Component<any> {
    

    //state
    state={ min_year:0,max_year:0,selectValue:"Selected Year", allyears : []}

   //populating year filter dynamically from json
    static getDerivedStateFromProps(nextProps,state){
         if(nextProps.years != ""){
           var max_min_value = [];
              nextProps.years.map(x=>{ max_min_value.push(parseInt(x.vintage)) })
             return { max_year : Math.max(...max_min_value),min_year :  Math.min(...max_min_value)};
          }
          else{return null }
         }

   //calling update year filtering prop
    selectedyear = (e)=>{
        this.setState({ selectValue :  e.target.value
          },function(){ this.props.updatewines(this.state.selectValue) })
        }



render(){
 return(
       <select  onChange ={this.selectedyear}  value={this.state.selectValue} >
        <option key="first" value="Selected Year">Selected Year</option>
        {/*  populating all years in dropdo */}
        {
             ( ()=>{ var alloptions = []
                  for(var x=this.state.min_year ; x<= this.state.max_year; x++){
                   alloptions.push(<option key={x} value={x} >{x}</option>)}
                    return  alloptions
            })()
        }
       
      </select>

    )
}}

export default  Selectdropdown