import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg3 = ({pic3, swatch3, img3Index, onMouseOver, i3, onMouseMain3, onMouseMainLeave3, mouseClick, cBox}) => {

  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i3 ? <img
          className="hoverMainImg hovPic3"
          src={pic3[img3Index].slice(2,3)}
          alt="Hover Image"
          id="i3"
          onMouseOver={onMouseMain3}
          onMouseOut={onMouseMainLeave3}
        /> : <img
        className="hoverMainImg hovPic3"
        src={pic3[img3Index].slice(3,4)}
        alt="Hover Image"
        id="i3"
        onMouseOver={onMouseMain3}
        onMouseOut={onMouseMainLeave3}
        />}
        <div className="swatch-bg">
          <button className="svgButton" onClick={mouseClick}><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <div className="shield">          
          <div  className={cBox ? "slide-left colorBox" : "slide-right colorBox "}>
          <img
            className="swatchImg hoverbox1 img3"
            src={swatch3[0].slice(1, 2)}
            alt="swatch Image"
            name="0"
            id="img3"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox2 img3"
            src={swatch3[0].slice(1, 2)}
            alt="swatch Image"
            name="1"
            id="img3"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox3 img3"
            src={swatch3[0].slice(1, 2)}
            alt="swatch Image"
            name="2"
            id="img3"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox4 img3"
            src={swatch3[0].slice(1, 2)}
            alt="swatch Image"
            name="3"
            id="img3"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox5 img3"
            src={swatch3[0].slice(1, 2)}
            alt="swatch Image"
            name="4"
            id="img3"
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



export default HoverImg3;