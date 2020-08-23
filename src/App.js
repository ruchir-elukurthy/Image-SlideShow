import React, { Component } from "react";

const Squad = [
  "https://i2-prod.manchestereveningnews.co.uk/incoming/article17602478.ece/ALTERNATES/s615/0_GettyImages-1198855234.jpg",
  "https://cdn.vox-cdn.com/thumbor/aL5AhhT_j-z35NgvXdcMvC_QUGw=/0x0:2400x3000/1200x800/filters:focal(1438x317:1822x701)/cdn.vox-cdn.com/uploads/chorus_image/image/67024646/1254242454.jpg.0.jpg",
  "https://i0.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211338990.jpg",
  "https://en.as.com/en/imagenes/2020/06/16/football/1592327308_835474_noticia_normal.jpg",
  "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/05/18153514/Jesse-Lingard-Man-Utd-F365.jpg",
];

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { currentImg: 0 };
    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    if (this.state.currentImg + 1 === Squad.length) {
      this.setState({
        currentImg: 0,
      });
      console.log(this.state.currentImg);
    } else {
      this.setState({
        currentImg: this.state.currentImg + 1,
      });
    }
  }

  render() {
    let img = Squad[this.state.currentImg];
    return (
      <div>
        <img src={img} alt=" " />
        <button onClick={this.nextGP}>Next</button>
      </div>
    );
  }
}

export default App;
