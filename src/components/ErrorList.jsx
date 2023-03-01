const ErrorList = ({ errors }) => {
    return errors.map((error) => <li key={error}>{error}</li>)
}
export default ErrorList
