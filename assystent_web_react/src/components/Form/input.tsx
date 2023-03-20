import propsInput from '../../types/props/input'
import { FormEvent } from 'react'
const Input = ({type, id, onChange}: propsInput) => {
	return <input id={id} type={type} onChange={
        (event: FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value)} />
}
export default Input
