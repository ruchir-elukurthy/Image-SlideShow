import React, { Component } from "react";
import Players from "./components/Players";

export class App extends Component {
  state = {
    players: [
      {
        id: 1,
        tuanzebe:
          "https://images.daznservices.com/di/library/GOAL/e2/82/axel-tuanzebe-man-utd-2019-20_15l7nsm715acy14rlprwldrh2v.jpg",
      },
      {
        id: 2,
        ighalo:
          "https://d3nfwcxd527z59.cloudfront.net/content/uploads/2020/03/06081624/Odion-Ighalo-celebrates-goal-Manchester-United-Derby.jpg",
      },
      {
        id: 3,
        martial:
          "https://i2-prod.manchestereveningnews.co.uk/incoming/article17602478.ece/ALTERNATES/s615/0_GettyImages-1198855234.jpg",
      },
      {
        id: 4,
        greenwood:
          "https://cdn.vox-cdn.com/thumbor/aL5AhhT_j-z35NgvXdcMvC_QUGw=/0x0:2400x3000/1200x800/filters:focal(1438x317:1822x701)/cdn.vox-cdn.com/uploads/chorus_image/image/67024646/1254242454.jpg.0.jpg",
      },
      {
        id: 5,
        james:
          "https://i0.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211338990.jpg",
      },
      {
        id: 6,
        rashford:
          "https://en.as.com/en/imagenes/2020/06/16/football/1592327308_835474_noticia_normal.jpg",
      },
      {
        id: 7,
        lingard:
          "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/05/18153514/Jesse-Lingard-Man-Utd-F365.jpg",
      },
    ],
  };
  render() {
    return <Players players={this.state.players} />;
  }
}

export default App;
