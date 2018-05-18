import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

class Page extends Component {
    constructor(props){
        super(props);
        this.onYearBtnClick = this.onYearBtnClick.bind(this);
    }

    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText);
      }
    render () {
        const { 
            photos, year
            
         } = this.props
        return (
            <div className={this.props.className}>
                <p>
                    <button 
                        onClick={this.onYearBtnClick } 
                        className='btn btn-dark' 
                        style={{ margin: "10px"}}>
                        
                        2016
                    </button>

                    <button 
                        onClick={this.onYearBtnClick } 
                        className='btn btn-dark' 
                        style={{ margin: "10px"}}>
                        
                        2015
                    </button>
                    <button 
                        onClick={this.onYearBtnClick } 
                        className='btn btn-dark' 
                        style={{ margin: "10px"}}>
                        
                        2014
                    </button>
                </p>


                <h3>{ year } year</h3>
                <p>
                    You have { photos.length } photo
                </p>
            </div>
        )
    }
}
Page.propTypes = {
    year: PropTypes.number.isRequired,
    page: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}
export default styled(Page)`
    text-align: center;
    margin-top: 100px;
`;