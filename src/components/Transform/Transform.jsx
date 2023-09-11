import RangeSlider from "../RangeSlider/RangeSlider";
import ResultComponent from "../ResultComponent/ResultComponent";
import { useState } from "react";
const Transform = () => {
    const [styles,setStyles] = useState({transform:null});
    const [sliders,setSliders] = useState({
        rotate: 0,
        scale: 1,
        skew: 0,
        translate_x: 0,
        translate_y: 0
    });
    const slidersOnChange=(event,field)=>{
        const nuevosValores={...sliders,[field]: event.target.value};
        setSliders(nuevosValores);
        setStyles({transform:`rotate(${nuevosValores.rotate}deg) scale(${nuevosValores.scale}) skew(${nuevosValores.skew}deg) translate(${nuevosValores.translate_x}px,${nuevosValores.translate_y}px) `});
        console.log(styles)
    }
    return ( 
        <div>
            <RangeSlider title={"rotate"} value={sliders.rotate} onChange={e=>slidersOnChange(e,"rotate")} max={360} />
            <RangeSlider title={"scale"} value={sliders.scale} onChange={e=>slidersOnChange(e,"scale")}  min={0} max={2} step={.1}/>
            <RangeSlider title={"skew"} value={sliders.skew} onChange={e=>slidersOnChange(e,"skew")}   min={-180} max={180} />
            <RangeSlider title={"translate x"} value={sliders.translate_x} onChange={e=>slidersOnChange(e,"translate_x")}/>
            <RangeSlider title={"translate y"} value={sliders.translate_y} onChange={e=>slidersOnChange(e,"translate_y")}/>

            <ResultComponent styles={styles.transform?styles:{}}/> 
        </div>
     );
}
 
export default Transform;