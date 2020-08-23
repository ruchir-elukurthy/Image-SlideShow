import React, { Component } from "react";
import Players from "./components/Players";

const Squad = [
  "https://images.daznservices.com/di/library/GOAL/e2/82/axel-tuanzebe-man-utd-2019-20_15l7nsm715acy14rlprwldrh2v.jpg",
  "https://d3nfwcxd527z59.cloudfront.net/content/uploads/2020/03/06081624/Odion-Ighalo-celebrates-goal-Manchester-United-Derby",
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
  }

  nextGP() {
    let current = this.state.currentImg;
    let next = ++current % Squad.length;
    this.setState({ currentImg: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextImg, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let img = Squad[this.state.currentImg];
    return <Players img={img} />;
  }
}

export default App;
