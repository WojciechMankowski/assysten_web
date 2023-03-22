type typeInput = 'submit'| 'text' | 'password' | 'email'
export default interface propsInput {
    type: typeInput,
    onChange: Function;
    id: string
    value: string
}
