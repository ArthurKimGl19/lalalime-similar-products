import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg4 = ({pic4, swatch4, img4Index, onMouseOver, i4, onMouseMain4, onMouseMainLeave4, mouseClick, cBox}) => {

  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i4 ? <img
          className="hoverMainImg hovPic4"
          src={pic4[img4Index].slice(2,3)}
          alt="Hover Image"
          id="i4"
          onMouseOver={onMouseMain4}
          onMouseOut={onMouseMainLeave4}
        /> : <img
        className="hoverMainImg hovPic4"
        src={pic4[img4Index].slice(3,4)}
        alt="Hover Image"
        id="i4"
        onMouseOver={onMouseMain4}
        onMouseOut={onMouseMainLeave4}
        />}
        <div className="swatch-bg">
          <button className="svgButton" onClick={mouseClick}><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <div className="shield">          
          <div  className={cBox ? "slide-left colorBox" : "slide-right colorBox "}>
          <img
            className="swatchImg hoverbox1 img4"
            src={swatch4[0].slice(1, 2)}
            alt="swatch Image"
            name="0"
            id="img4"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox2 img4"
            src={swatch4[0].slice(1, 2)}
            alt="swatch Image"
            name="1"
            id="img4"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox3 img4"
            src={swatch4[0].slice(1, 2)}
            alt="swatch Image"
            name="2"
            id="img4"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox4 img4"
            src={swatch4[0].slice(1, 2)}
            alt="swatch Image"
            name="3"
            id="img4"
            onMouseOver={(e) => onMouseOver(e)}
          />
          <img
            className="swatchImg hoverbox5 img4"
            src={swatch4[0].slice(1, 2)}
            alt="swatch Image"
            name="4"
            id="img4"
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



export default HoverImg4;