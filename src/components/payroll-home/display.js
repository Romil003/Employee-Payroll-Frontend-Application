import React from "react";
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg'
import {withRouter} from "react-router-dom";
import profile from '../../assets/profile-images/Ellipse -1.png';

import './display.css';

const Display = (props) => {
    return (
        <table id="table-display" className="table">
            <tbody>
                <tr key={-1}>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                {
                    props.employeeArray && props.employeeArray.map((element,ind) => (
                        <tr key={ind}>
                            <td><img className="profile" src={profile} alt="" /></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.departMent && element.departMent.map(dept => ( <div className="dept-label">{dept}</div>))}</td>
                            <td>{element.salary}</td>
                            <td>{element.startDate}</td>
                            {/* <td>
                                <img onClick={() => remove(element.id)} src={deleteIcon} alt="delete" />
                                <img onClick={() => update(element.id)} src={editIcon} alt="edit" />
                            </td> */}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Display;