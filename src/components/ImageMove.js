import React from "react"
// import Zoom from "react-img-zoom"
const { Component } = React

// const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

class ImageMove  extends Component{
  state = {
    backgroundImage: `url(${this.props.image})`,
    backgroundPosition: '0% 0%'
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageX - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render = () =>
    <figure onMouseMove={this.handleMouseMove} style={this.state}>
      <img src={this.props.image} />
    </figure>




}

export default ImageMove;