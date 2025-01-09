import propTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">Student
    <table>
        <tbody>
        <tr>
            <th>Name</th>
            <td>{props.name}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{props.age}</td>
        </tr>
        <tr>
            <th>Ismarried</th>
            <td>{props.isMarried ? "Yes" : "No" }</td>
        </tr>
        </tbody>
    </table>
    </div>
  )
}

Student.propTypes = {
    name:propTypes.string,
    age:propTypes.number,
    isMarried:propTypes.bool,
}

Student.defaultProps = {
    name: "No_Name",
    age: 0,
    isMarried: false,
};

export default Student;