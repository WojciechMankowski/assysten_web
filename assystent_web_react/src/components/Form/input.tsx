import propsInput from "../../types/props/input"
import { FormEvent } from "react"
const Input = ({ type, id, onChange, value }: propsInput) => {
	return (
		<input
			id={id}
			type={type}
			value={value}
			onChange={(event: FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value)}
			autoComplete="false"
		/>
	)
}
export default Input
