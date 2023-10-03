import "./RangeSlider.css";

const RangeSlider = ({title,value,onChange,max=200,min=0,step=1}) => {
    return ( 
        <div className="slider_wrap">
            <span className="title">{title}</span>
            <input type="range" min={min} max={max} value={value} onChange={onChange} step={step}/>
            <span className="value">{value}</span>
        </div>
     );
}
 
export default RangeSlider;