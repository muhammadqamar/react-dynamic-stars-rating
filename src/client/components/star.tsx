import * as React from 'react';
import StarRatings from 'react-star-ratings';
import CustomStar from './CustomStar' ;
class Star extends React.Component<any> {
    state={ finalrating : 0}
    componentDidMount() {

        //slicing rating values 
         var counter = {"one":0, "two":0,"three":0,"four":0,"five":0 }
         this.props.rating.map(x=>{
      
          switch(x.stars)
                {
                 case 1:
                 counter = {...counter,'one': counter['one']+1}
                 break
                 case 2:
                 counter = {...counter,'two':counter['two']+1}
                 break
                 case 3:
                 counter = {...counter,'three': counter['three']+1}
                 break
                 case 4:
                 counter = {...counter,'four': counter['four']+1}
                 break
                 case 5:
                 counter = {...counter,'five': counter['five']+1}
                 break
                 default:
                 counter = counter
                 break
                 }
          
         })

        //calulating rating and updating state
        var final_rating =  (5*counter.five + 4*counter.four + 3*counter.three + 2*counter.two + 1*counter.one) / (counter.five + counter.four + counter.three +counter.two  + counter.one  )
        if(!!final_rating) {
        this.setState({ finalrating  :final_rating})
        } 
    }
    render() {

    
      return (
      <CustomStar  rating={this.state.finalrating} />

      );
    }
  }

  export default  Star