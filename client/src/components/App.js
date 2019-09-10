import React, { Component } from 'react';
import axios from 'axios';
import PriceList from './PriceList.js';
import TitleList from './TitleList.js';
import ImgHover from './ImgHover.js';
import '../../dist/style.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      title: [],
      price: [],
      img: [],
    }
    this.getComponents = this.getComponents.bind(this);
  }

  componentDidMount(){
    this.getComponents();
  }

  getComponents() {
    axios
    .get('/api/similar_products')
    .then((res) => {
      let idx = Math.floor(Math.random() * 60)
      this.setState({
      title: res.data[idx]['title'],
      price: res.data[idx]['price'],
      img: res.data[idx]['img']
    }, () => console.log('title', res.data[idx]))})
    .catch((err) => console.log('title',err))
  }

  render(){
      return(
        <div className="similar-container">
          <div className="headline-top">
            <h2 className="headline">You may also like</h2>
          </div>
          <ImgHover img={this.state.img}/>
          <TitleList title={this.state.title}/>
          <PriceList price={this.state.price}/>
        </div>
      )
  }
}


export default App;