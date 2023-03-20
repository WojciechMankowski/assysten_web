import propsButton from "../../types/props/button"
const Button = (props: propsButton) => { 
    
    return <button type={props.type} 
    onClick={()=>props.function()}
    >{props.text}</button>
 }
export default Button