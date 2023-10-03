import React, { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import ResultComponent from "../ResultComponent/ResultComponent";

const Filter = () => {
    const [styles, setStyles] = useState({ filter: null });
    const [sliders, setSliders] = useState({
        blur: 0,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        saturate: 100,
        hueRotate: 0,
        invert: 0,
    });

    const slidersOnChange = (event, field) => {
        const nuevosValores = { ...sliders, [field]: event.target.value };
        setSliders(nuevosValores);
        setStyles({
            filter: `blur(${sliders.blur}px) brightness(${sliders.brightness}%) contrast(${sliders.contrast}%) grayscale(${sliders.grayscale}%) saturate(${sliders.saturate}%) hue-rotate(${sliders.hueRotate}deg) invert(${sliders.invert}%)`,
        });
    };

    return (
        <>
            <div className="settings">
                <RangeSlider title={"blur"} value={sliders.blur} onChange={(e) => slidersOnChange(e, "blur")} max={10} />
                <RangeSlider title={"brightness"} value={sliders.brightness} onChange={(e) => slidersOnChange(e, "brightness")} max={200} />
                <RangeSlider title={"contrast"} value={sliders.contrast} onChange={(e) => slidersOnChange(e, "contrast")} max={200} />
                <RangeSlider title={"grayscale"} value={sliders.grayscale} onChange={(e) => slidersOnChange(e, "grayscale")} max={100} />
                <RangeSlider title={"saturate"} value={sliders.saturate} onChange={(e) => slidersOnChange(e, "saturate")} max={200} />
                <RangeSlider title={"hue-rotate"} value={sliders.hueRotate} onChange={(e) => slidersOnChange(e, "hueRotate")} max={360} />
                <RangeSlider title={"invert"} value={sliders.invert} onChange={(e) => slidersOnChange(e, "invert")} max={100} />
            </div>

            <ResultComponent styles={styles.filter ? styles : {}} />
        </>
    );
};

export default Filter;
