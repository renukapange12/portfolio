import "./intro.css"
import me from "../../img/me.jpg";
const Intro=()=>{
    return(
        <div className="i"> 
    <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Renuka Pange</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">software Developer</div>
                    <div className="i-title-item">Web developer</div>
                    <div className="i-title-item">Automation tester</div>
                    <div className="i-title-item">frontEnd developer</div>
                </div>
            </div>
            <div className="i-desc">A computer engg graduate</div>


    </div>


    </div>
    <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img"/>

    </div>
    
        </div>

)
}
export default Intro