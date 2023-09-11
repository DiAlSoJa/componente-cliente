import React, { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import ResultComponent from "../ResultComponent/ResultComponent";

const Neumorphism = () => {
    const [styles, setStyles] = useState({
        borderRadius: '14px',
        background: '#1950ed',
        boxShadow: '5px 5px 18px #0a205f, -5px -5px 18px #2880ff',
    });
    const [selectedColor, setSelectedColor] = useState(null); // Valor inicial
    const [rgb,setRgb]= useState({ r: 0, g: 0, b: 0 })


    const [sliders, setSliders] = useState({
        size:100,
        radius:5,
        intensity: .60,
        distance:5,
        blur: 18
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
            borderRadius: `${nuevosValores.size}px`,
            background: `#1950ed`,
            boxShadow: `5px 5px 18px #0a205f, -5px -5px 18px #2880ff`,
        });
    };
    
    
    return (
        <div style={styles}>
            <RangeSlider title={"Radius"} value={sliders.radius} onChange={(e) => slidersOnChange(e, "radius")} min={0}max={50} step={1} />
            <RangeSlider title={"intensity"} value={sliders.intensity} onChange={(e) => slidersOnChange(e, "intensity")} min={0}max={1} step={.1} />
            <RangeSlider title={"size"} value={sliders.size} onChange={(e) => slidersOnChange(e, "size")} min={0}max={1} step={.1} />
            <RangeSlider title={"distance"} value={sliders.distance} onChange={(e) => slidersOnChange(e, "distance")} min={0}max={1} step={.1} />
            <RangeSlider title={"blur"} value={sliders.blur} onChange={(e) => slidersOnChange(e, "blur")} min={0}max={1} step={.1} />

            <input
                type="color"
                value={selectedColor}
                onChange={(e)=>slidersOnChange(e)}
            />
            
            <ResultComponent styles={styles} />
        </div>
    );
};

export default Neumorphism;