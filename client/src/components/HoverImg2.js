import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg2 = ({pic2, swatch2, img2Index, onMouseOver, i2, onMouseMain2, onMouseMainLeave2, mouseClick, cBox}) => {

  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i2 ? <img
          className="hoverMainImg hovPic2"
          src={pic2[img2Index].slice(2,3)}
          alt="Hover Image"
          id="i2"
          onMouseOver={onMouseMain2}
          onMouseOut={onMouseMainLeave2}
        /> : <img
        className="hoverMainImg hovPic2"
        src={pic2[img2Index].slice(3, 4)}
        alt="Hover Image"
        id="i2"
        onMouseOver={onMouseMain2}
        onMouseOut={onMouseMainLeave2}
        />}
        <div className="swatch-bg">
          <button className="svgButton" onClick={mouseClick}><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <div className="shield">          
          <div  className={cBox ? "slide-left colorBox" : "slide-right colorBox "}>
          <img
            className="swatchImg hoverbox1 img2"
            src={swatch2[0].slice(1, 2)}
            alt="swatch Image"
            name="0"
            id="img2"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox2 img2"
            src={swatch2[0].slice(1, 2)}
            alt="swatch Image"
            name="1"
            id="img2"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox3 img2"
            src={swatch2[0].slice(1, 2)}
            alt="swatch Image"
            name="2"
            id="img2"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox4 img2"
            src={swatch2[0].slice(1, 2)}
            alt="swatch Image"
            name="3"
            id="img2"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox5 img2"
            src={swatch2[0].slice(1, 2)}
            alt="swatch Image"
            name="4"
            id="img2"
            onMouseOver={(e) => onMouseOver(e)}
          />
          </div>
          </div>
          <button className="svgButton rbttn" onClick={mouseClick}><FaAngleRight className="svgIcon" size={30} color="#7f7f7f" /></button>
        </div>
      </div>
    </div>
  )
}



export default HoverImg2;