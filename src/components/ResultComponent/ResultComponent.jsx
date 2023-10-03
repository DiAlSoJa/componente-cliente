import "./ResultComponent.css";
const ResultComponent = ({styles}) => {
    return ( 
        <div className="result">
            <div className="result__title">
                <h3>Preview</h3>
            </div>
            <div className="result__box">
                <div className="result__thing" style={styles}>
                    
                </div>
            </div>
        </div>
     );
}
 
export default ResultComponent;