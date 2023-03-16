type props = {text: string, id: string}
const Label = ({text, id}:props) => { 
    return <label htmlFor={id}>{text}</label>
 }
export default Label