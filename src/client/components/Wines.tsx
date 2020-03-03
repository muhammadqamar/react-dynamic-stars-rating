import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as wine_img  from  "../img/wine-placeholder.png" ;
import * as actionCreators from '../actions/wineActions';
import Star from './Star';
import Selectdropdown from  './Selectdropdown'

export class Wines extends React.PureComponent<any, any> {
    
    //state define
    state={ wines_state: [],maxsold:0, load : true}
  
    //fetching json data
    public componentDidMount() {this.props.actions.fetchWines(); }

    //waiting for json response to update state
    static getDerivedStateFromProps(nextProps,state){
      if(nextProps.wines != "" ){
       if(!state.load){ return }
        //best sellecr check
         return { wines_state: nextProps.wines,maxsold:Math.max(...nextProps.wines.map(x=>{return x.unitsSold})), load: false};
         }
         else{ return null }
     }

    //dynamic year filtering
    updatewines = (year)=>{
    if(year == "Selected Year"){
         this.setState({wines_state :  this.props.wines })
        }
        else{
           this.setState({wines_state :   this.props.wines.filter(c=>{ return c.vintage == year})})
        }
    }
  

  
    public render() {
            return (
            <div className="wines">
                <h1 className="wines__title">Wine List</h1>
                <Selectdropdown  years ={this.props.wines} updatewines={this.updatewines}/>

                {/* condition for year not founf */}
               { this.state.wines_state.length != 0 ? (
                <ul className="wines__list">
                    { this.state.wines_state
                        .map((wine) => {
                            return(
                                 <li key={wine.name} className="wine">
                                    <img src={wine_img} />
                                    <div className="details">
                                    <h2>{wine.name}, {wine.vintage}
                                  {this.state.maxsold == wine.unitsSold && 
                                     ( <span className="maxsold">Best Seller</span> )
                                    }
                                    </h2>
                                    <h5>{wine.region},{wine.vineyard}</h5>
                                    <div><Star rating={wine.ratings} /><span>({wine.unitsSold})</span></div>
                                    </div> 

                                 </li>
                            )})}
                 </ul>
               ):(<div className="nodata">no data found</div>)
            }
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    
    return { ...state.wines};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
