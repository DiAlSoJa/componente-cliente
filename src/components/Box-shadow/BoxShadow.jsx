import { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import ResultComponent from "../ResultComponent/ResultComponent";

const BoxShadow = () => {
    const [styles,setStyles] = useState({boxShadow:"10px 10px 5px 0 rgba(0,0,0,.75)"});
    const [sliders,setSliders] = useState({
        horizontal: 10,
        vertical: 10,
        blur: 5,
        spread: 0,
        opacity: .75
    });
    const slidersOnChange=(event,field)=>{
        const nuevosValores={...sliders,[field]: event.target.value};
        setSliders(nuevosValores);
        setStyles({boxShadow:`${nuevosValores.horizontal}px ${nuevosValores.vertical}px ${nuevosValores.blur}px ${nuevosValores.spread}px rgba(0,0,0,${nuevosValores.opacity})`})
    }
    return ( 

        <div>
            <RangeSlider title={"Horizontal Shadow"} value={sliders.horizontal} onChange={e=>slidersOnChange(e,"horizontal")}/>
            <RangeSlider title={"Vertical Shadow"}  value={sliders.vertical} onChange={e=>slidersOnChange(e,"vertical")}/>
            <RangeSlider title={"blur"}  value={sliders.blur} onChange={e=>slidersOnChange(e,"blur")}/>
            <RangeSlider title={"Spread Radius"}  value={sliders.spread} onChange={e=>slidersOnChange(e,"spread")} min={-200} step={2}/>
            <RangeSlider title={"Oapcity"} value={sliders.opacity} onChange={e=>slidersOnChange(e,"opacity")} min={0} max={1} step={.01}/>
            <ResultComponent styles={styles}/>
        </div>
     );
}
 
export default BoxShadow;