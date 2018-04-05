import React from 'react';
import "./flat.css";

// const flat = {
//   name: "great flat",
//   price: 100,
//   //etc.
// }
//
// <Flat flat={flat} />

class Flat extends React.Component {
  render() {
    const title = `${this.props.flat.price}
    ${this.props.flat.priceCurrency} -
    ${this.props.flat.name}`;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className='flat' onClick={}>
        <div className='flat-picture' style={style}></div>
        <div className='flat-title'>
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
