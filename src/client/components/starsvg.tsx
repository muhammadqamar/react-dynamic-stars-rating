import * as React from 'react';

class StarSvg extends React.Component<any> {

    render(){
        return(
            <svg width="16px" height="16px" viewBox="0 0 220 221" version="1.1" >
  
   
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(10.000000, 16.000000)" strokeWidth="12" stroke="#9B9B9B">
                
              <defs>
                <linearGradient id="MyGradient">
                  <stop offset={this.props.gradient_floor} stopColor="#f8e81c" />
                  <stop offset={this.props.gradient_ceil}  stopColor="#fff" />
                </linearGradient>
              </defs>
                    <polygon id="Star-1" points="100 153.700002 41.2214748 191.755801 57.2024551 120.740111 4.89434837 73.2441986 73.5496626 67.4098878 100 0 126.450337 67.4098878 195.105652 73.2441986 142.797545 120.740111 158.778525 191.755801 "></polygon>
                </g>
            </g>
        </svg>
        )
    }

}

export default StarSvg