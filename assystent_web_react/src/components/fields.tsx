import Input from "./Form/input"
import Button from "./Form/button"
import FieldsProps from "../types/props/fields"
const Fields = ({ command, setCommand,executeTheCommand }: FieldsProps) => {
	const settingCommand = (event: Event) => {
		setCommand(event.toString())
	}
	return (
		<div className="fields">
			<Input type="text" id="commend_input" onChange={settingCommand} value={command} />
			<Button type="button" text="Wykonaj" function={executeTheCommand} />
		</div>
	)
}

export default Fields
