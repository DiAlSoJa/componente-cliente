import React, { useState } from 'react';
import ResultComponent from '../ResultComponent/ResultComponent';
import DropdownMenu from '../DropMenu/DropMenu';
import RangeSlider from '../RangeSlider/RangeSlider';

const BorderRadius = () => {
    const [sliderValue, setSliderValue] = useState(10);


    const [sliderValues, setSliderValues] = useState({
        sliderTop: 10,
        sliderBottom: 10,
        sliderLeft: 10,
        sliderRight: 10
    });

    const [styles,setStyles] = useState({borderRadius:`${sliderValue}px`});

    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setSliderValue(newValue);
        setStyles({borderRadius:`${sliderValue}px`})
    };

    const handleSlidersChange = (sliderName, value) => {
        setSliderValues({
          ...sliderValues,
          [sliderName]: value
        });
        setStyles({
            borderTopLeftRadius: `${sliderName === 'sliderTop' ? value : sliderValues.sliderTop}px`,
            borderTopRightRadius: `${sliderName === 'sliderRight' ? value : sliderValues.sliderRight}px`,
            borderBottomLeftRadius: `${sliderName === 'sliderLeft' ? value : sliderValues.sliderLeft}px`,
            borderBottomRightRadius: `${sliderName === 'sliderBottom' ? value : sliderValues.sliderBottom}px`
        });
      };


    return ( 
        <>

            <div className="settings">
                {false
                ?
                <>
                <RangeSlider
                name="sliderTop"
                value={sliderValues.sliderTop}
                onChange={(e)=>handleSlidersChange("sliderTop",e.target.value)}
                title="Border-radius Top"
                />
                <RangeSlider
                name="sliderBottom"
                value={sliderValues.sliderBottom}
                onChange={(e)=>handleSlidersChange("sliderBottom",e.target.value)}
                title="Border-radius Bottom"
                />
                <RangeSlider
                name="sliderLeft"
                value={sliderValues.sliderLeft}
                onChange={(e)=>handleSlidersChange("sliderLeft",e.target.value)}
                title="Border-radius Left"
                />
                <RangeSlider
                name="sliderRight"
                value={sliderValues.sliderRight}
                onChange={(e)=>handleSlidersChange("sliderRight",e.target.value)}
                title="Border-radius Right"
                />
                </>
                :
                <RangeSlider value={sliderValue} onChange={handleSliderChange} title={"Border-radius"}/>
                }


            </div>

            <ResultComponent styles={styles}/>
        </>
     );
}
 
export default BorderRadius;