export default interface FieldsProps {
    command: string,
    setCommand: React.Dispatch<React.SetStateAction<string>>
    executeTheCommand: Function
}