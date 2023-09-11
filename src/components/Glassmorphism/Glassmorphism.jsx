import React, { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import ResultComponent from "../ResultComponent/ResultComponent";

const Glassmorphism = () => {
    const [styles, setStyles] = useState({
        background: "rgba(120, 120, 120, 0.25)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
    });
    const [selectedColor, setSelectedColor] = useState("#000000"); // Valor inicial
    const [rgb,setRgb]= useState({ r: 0, g: 0, b: 0 })


    const [sliders, setSliders] = useState({
        transparency:.5,
        blur:4,
        outline: 1
    });

    const slidersOnChange = (event, field="") => {
        const nuevosValores = { ...sliders, [field]: event.target.value };
        let valoresRgb=rgb;
        if(event.target.type === "range"){
            setSliders(nuevosValores);

        }
        else if(event.target.type === "color"){
            const hexColor = event.target.value;
            const r = parseInt(hexColor.slice(1, 3), 16);
            const g = parseInt(hexColor.slice(3, 5), 16);
            const b = parseInt(hexColor.slice(5, 7), 16);
            valoresRgb={r,g,b}
            setSelectedColor(hexColor);
            setRgb(valoresRgb);
        }
        console.log(valoresRgb)
        setStyles({
            background: `rgba(${valoresRgb.r},${valoresRgb.g},${valoresRgb.b}, ${nuevosValores.transparency})`,
            boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
            backdropFilter: `blur(${nuevosValores.blur}px)`,
            WebkitBackdropFilter: `blur(${nuevosValores.blur}px)`,
            borderRadius: "10px",
            border: `1px solid rgba(${valoresRgb.r},${valoresRgb.g},${valoresRgb.b},  ${nuevosValores.outline})`,
        });
    };

    return (
        <div style={styles}>
             <RangeSlider title={"transparency"} value={sliders.transparency} onChange={(e) => slidersOnChange(e, "transparency")} min={0}max={1} step={.1} />
            <RangeSlider title={"blur"} value={sliders.blur} onChange={(e) => slidersOnChange(e, "blur")} min={0}max={20}  step={1}/>
            <RangeSlider title={"Border transparency"} value={sliders.outline} onChange={(e) => slidersOnChange(e, "outline")} min={0}max={1} step={.1} />
            <input
                type="color"
                value={selectedColor}
                onChange={(e)=>slidersOnChange(e)}
            />
            
            <ResultComponent styles={styles} />
        </div>
    );
};

export default Glassmorphism;