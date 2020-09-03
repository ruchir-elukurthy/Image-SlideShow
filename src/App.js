import React, { Component } from "react";
import "./App.css";
import Styled from "styled-components";

const Button = Styled.button`
        background-color: blue;
        border-radius: 10px;
        border: 4px double #cccccc;
        color: #eeeeee;
        text-align: center;
        font-size: 20px;
        padding: 6px;
        width: 200px;
        cursor: pointer;
        margin: 5px;
`;

const Squad = [
  "https://i2-prod.manchestereveningnews.co.uk/incoming/article17602478.ece/ALTERNATES/s615/0_GettyImages-1198855234.jpg",
  "https://cdn.vox-cdn.com/thumbor/aL5AhhT_j-z35NgvXdcMvC_QUGw=/0x0:2400x3000/1200x800/filters:focal(1438x317:1822x701)/cdn.vox-cdn.com/uploads/chorus_image/image/67024646/1254242454.jpg.0.jpg",
  "https://i0.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211338990.jpg",
  "https://en.as.com/en/imagenes/2020/06/16/football/1592327308_835474_noticia_normal.jpg",
  "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/05/18153514/Jesse-Lingard-Man-Utd-F365.jpg",
  "https://images.daznservices.com/di/library/GOAL/b6/81/fred-manchester-united-2019-20_qvb84p65cx5l1pdsnvv8biufr.jpg",
  "https://tmssl.akamaized.net/images/foto/normal/scott-mctominay-von-manchester-united-1568285359-25675.jpg",
  "https://specials-images.forbesimg.com/imageserve/1170683769/960x0.jpg",
  "https://s.yimg.com/ny/api/res/1.2/GVorWvq2VLMroOnPenu1Lw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzY4O2g9NTExO2lsPXBsYW5l/http://media.zenfs.com/en_us/News/afp.com/2ccacccad67196e2cd7a1de69f9397d7381df35b.jpg",
  "https://i.dailymail.co.uk/1s/2020/02/20/14/24981236-0-image-m-69_1582210705495.jpg",
  "https://images.daznservices.com/di/library/GOAL/31/d7/david-de-gea-manchester-united-2019-20_1pl4a0ujyb0uc1a8ca03kh1z0i.jpg",
  "https://en.as.com/en/imagenes/2020/02/18/football/1582055018_528691_noticia_normal.jpg",
  "https://tmssl.akamaized.net/images/foto/normal/bruno-fernandes-manchester-united-1584088715-33631.jpg",
];

export class App extends Component {
  state = { currentImg: 0 };
  nextGP = this.nextGP.bind(this);

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
      <div className="manutd">
        <h3>Hit next to see man utd players</h3>
        <div>
          <img id="player-image" src={img} alt=" " />
          <br />
          <Button onClick={this.nextGP}>Next</Button>
        </div>
      </div>
    );
  }
}

export default App;
