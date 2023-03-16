type typeInput = 'submit'| 'text' | 'password'
export default interface propsInput {
    type: typeInput,
    onChange: Function;
    id: string
}
