import React, { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import ResultComponent from "../ResultComponent/ResultComponent";

const Neumorphism = () => {
    const [styles, setStyles] = useState({
        borderRadius: '14px',
        background: '#1950ed',
        boxShadow: '5px 5px 18px #0a205f, -5px -5px 18px #2880ff',
        height:"300px",
        width:"300px"
    });
    const [selectedColor, setSelectedColor] = useState("#1950ed"); // Valor inicial
    const [rgb,setRgb]= useState({ r: 0, g: 0, b: 0 })


    const [sliders, setSliders] = useState({
        size:300,
        radius:5,
        intensity: .60,
        distance:5,
        blur: 18
    });

    const calcularSombraClara = (color, intensidad) => {
        // Convertir el color a valores RGB
        const { r, g, b } = rgb;
      
        // Calcular el color claro
        const nuevoR = r + (255 - r) * intensidad;
        const nuevoG = g + (255 - g) * intensidad;
        const nuevoB = b + (255 - b) * intensidad;
      
        // Convertir los valores RGB a formato de color hexadecimal
        const colorClaro = `#${Math.round(nuevoR).toString(16).padStart(2, "0")}${Math.round(
          nuevoG
        )
          .toString(16)
          .padStart(2, "0")}${Math.round(nuevoB).toString(16).padStart(2, "0")}`;
      
        return colorClaro;
      };
      
      const calcularSombraOscura = (color, intensidad) => {
        // Convertir el color a valores RGB
        const { r, g, b } = rgb;
      
        // Calcular el color oscuro
        const nuevoR = r - r * intensidad;
        const nuevoG = g - g * intensidad;
        const nuevoB = b - b * intensidad;
      
        // Convertir los valores RGB a formato de color hexadecimal
        const colorOscuro = `#${Math.round(nuevoR).toString(16).padStart(2, "0")}${Math.round(
          nuevoG
        )
          .toString(16)
          .padStart(2, "0")}${Math.round(nuevoB).toString(16).padStart(2, "0")}`;
      
        return colorOscuro;
      };

    const slidersOnChange = (event, field="") => {
        const nuevosValores = { ...sliders, [field]: event.target.value };
        let valoresRgb=rgb;
        
        let boxShadow;
        let hexColor;
        if(event.target.type === "range"){
            if(field==="distance"){
                boxShadow= `${nuevosValores.distance}px ${nuevosValores.distance}px ${nuevosValores.distance*2}px ${calcularSombraOscura(hexColor,nuevosValores.intensity)},${-nuevosValores.distance}px ${-nuevosValores.distance}px ${nuevosValores.distance*2}px ${calcularSombraClara(hexColor,nuevosValores.intensity)}`;
                nuevosValores.blur=nuevosValores.distance*2;
            }else{
                boxShadow=`${nuevosValores.distance}px ${nuevosValores.distance}px ${nuevosValores.blur}px ${calcularSombraOscura(hexColor,nuevosValores.intensity)},${-nuevosValores.distance}px ${-nuevosValores.distance}px ${nuevosValores.blur}px ${calcularSombraClara(hexColor,nuevosValores.intensity)}`;
            }
            setSliders(nuevosValores);
            hexColor=selectedColor;
        }
        else if(event.target.type === "color"){
            hexColor = event.target.value;
            const r = parseInt(hexColor.slice(1, 3), 16);
            const g = parseInt(hexColor.slice(3, 5), 16);
            const b = parseInt(hexColor.slice(5, 7), 16);

            valoresRgb={r,g,b}

            setSelectedColor(hexColor);
            setRgb(valoresRgb);
        }
        if(field==="distance"){
            boxShadow= `${nuevosValores.distance}px ${nuevosValores.distance}px ${nuevosValores.distance*2}px ${calcularSombraOscura(hexColor,nuevosValores.intensity)},${-nuevosValores.distance}px ${-nuevosValores.distance}px ${nuevosValores.distance*2}px ${calcularSombraClara(hexColor,nuevosValores.intensity)}`;
        }else{
            boxShadow=`${nuevosValores.distance}px ${nuevosValores.distance}px ${nuevosValores.blur}px ${calcularSombraOscura(hexColor,nuevosValores.intensity)},${-nuevosValores.distance}px ${-nuevosValores.distance}px ${nuevosValores.blur}px ${calcularSombraClara(hexColor,nuevosValores.intensity)}`;
        }
        setStyles({
            borderRadius: `${nuevosValores.radius}px`,
            background: `${hexColor}`,
            boxShadow,
            height:`${nuevosValores.size}px`,
            width:`${nuevosValores.size}px`
        });
        console.log(styles)
    };
    
    
    return (
        <>
            <div className="settings">
            <RangeSlider title={"Radius"} value={sliders.radius} onChange={(e) => slidersOnChange(e, "radius")} min={0}max={150} step={1} />
            <RangeSlider title={"intensity"} value={sliders.intensity} onChange={(e) => slidersOnChange(e, "intensity")} min={0.01}max={.6} step={.01} />
            <RangeSlider title={"size"} value={sliders.size} onChange={(e) => slidersOnChange(e, "size")} min={10}max={300} step={5} />
            <RangeSlider title={"distance"} value={sliders.distance} onChange={(e) => slidersOnChange(e, "distance")} min={5}max={50} step={1} />
            <RangeSlider title={"blur"} value={sliders.blur} onChange={(e) => slidersOnChange(e, "blur")} min={0}max={100} step={1} />

            <input
                type="color"
                value={selectedColor}
                onChange={(e)=>slidersOnChange(e)}
            />
            
            </div>
            <ResultComponent styles={styles} />
        </>
    );
};

export default Neumorphism;