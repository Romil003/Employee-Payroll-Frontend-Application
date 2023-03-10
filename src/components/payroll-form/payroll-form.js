import React,{ useState , useEffect, Component} from "react";
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse -1.png';
import profile3 from '../../assets/profile-images/Ellipse -8.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';
import './payroll-form.css';
import logo from '../../assets/images/logo.png';
import { useParams, Link} from "react-router-dom";

 const PayrollForm = (props) => {
    let initialValue = {
        name : '',
        profileArray: [
            { url:'../../assets/profile-images/Ellipse -3.png' },
            { url:'../../assets/profile-images/Ellipse -1.png' },
            { url:'../../assets/profile-images/Ellipse -8.png' },
            { url: '../../assets/profile-images/Ellipse -7.png'}
        ],
        allDepartments: [
            'HR','Sales','Finance','Engineer','Others'
        ],
        departmentValue:[],
        gender:'',
        salary:'',
        day:'1',
        month:'Jan',
        year:'2020',
        startDate:'',
        notes:'',
        id:'',
        profileUrl:'',
        isUpdate:false,
        error:{
            department:'',
            name:'',
            gender:'',
            salary:'',
            profileUrl:'',
            startDate:''
        }
    }

    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setForm ({...formValue, [event.target.name] : event.target.value})
    }

    const onCheckChange = (name) => {
        let index = formValue.departmentValue.indexOf(name);
        let checkArray = [...formValue.departmentValue]
        if(index> -1)
            checkArray.splice(index,1)
        else 
            checkArray.push(name);
        setForm ({ ...formValue,departmentValue : checkArray});        
    }

    const getChecked = (name) => {
        return (formValue.departmentValue && formValue.departmentValue.includes(name));
    }

    const validData = async () => {
        let isError = false;
        let error = {
            department :'',
            name:'',
            gender:'',
            salary:'',
            profileUrl:'',
            startDate:''
        }
        if (formValue.name.length < 1) {
            error.name = 'name is required field'
            isError = true;
        }
        if (formValue.gender.length < 1) {
            error.gender = 'gender is required field'
            isError = true;
        }
        if (formValue.salary.length < 1) {
            error.salary = 'salary is required field'
            isError = true;
        }
        if (formValue.profileUrl.length < 1) {
            error.profileUrl = 'profile is required field'
            isError = true;
        }
        if (formValue.departmentValue.length < 1) {
            error.department = 'department is required field'
            isError = true;
        }
        await setForm({...formValue,error : error})
        return isError;

    }

    const save = async (event) => {
        event.preventDefault();
        let data = {
            name : formValue.name,
            gender:formValue.gender,
            salary:formValue.salary,
            profileUrl:formValue.profileUrl,
            startDate:`${formValue.day} ${formValue.month} ${formValue.year}`,
            department:formValue.departmentValue,
            notes:formValue.notes
        }

        console.log(data);
    }

    const reset = () => {
        setForm({ ...initialValue,id : formValue.id, isUpdate: formValue.isUpdate});
        console.log(formValue);
    }

    return (
        <div>
            <header className="header-content header">
                <div className="logo-content">
                    <img src={logo} alt=""/>
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <div id="formId" className="form-content">
                <form className="form" action="#" onReset={reset} onSubmit={save}>
                    <div className="form-head">
                        Employee Payroll form
                    </div>
                    <div className="row-content">
                        <label className="label-text" htmlFor="name">Name</label>
                        <input className="input" type="text" id="name" name="name" value={formValue.name} onChange={changeValue} placeholder="Your name.." required />
                        <error-output className="text-error" htmlFor="text">{formValue.error.name}</error-output>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="profileUrl">Profile image</label>
                        <div className="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1"  
                                name="profileUrl" value="../assets/profile-image/Ellipse -3.png" onChange={changeValue}/>
                                <img className="profile" id="image1" src={profile1} alt="" />
                            </label>
                            <label>
                                <input type="radio" id="profile2"  name="profileUrl" value="../assets/profile-image/Ellipse 1.png" onChange={changeValue} />
                                <img className="profile" id="image2" src={profile2} alt="" />
                            </label>
                            <label>
                                <input type="radio" id="profile3"  name="profileUrl" value="../assets/profile-image/Ellipse -8.png" onChange={changeValue} />
                                <img className="profile" id="image3" src={profile3} alt="" />
                            </label>
                            <label>
                                <input type="radio" id="profile4"  name="profileUrl" value="../assets/profile-image/Ellipse -7.png" onChange={changeValue}/>
                                <img className="profile" id="image4" src={profile4} alt="" />
                            </label>
                        </div>
                        <error-output className="text-error" htmlFor="text">{formValue.error.profileUrl}</error-output>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" onChange={changeValue} name="gender" value="male" />
                            <label className="text" htmlFor="male">Male</label>
                            <input type="radio" id="female" onChange={changeValue} name="gender" value="female" />
                            <label className="text" htmlFor="female">Female</label>
                        </div>
                        <error-output className="text-error" htmlFor="text">{formValue.error.gender}</error-output>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="department">Department</label>
                        <div>
                            {formValue.allDepartments.map(item => (
                                <span key={item}>
                                    <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                        checked={ getChecked(item)} value={item}/>
                                    <label className="text" htmlFor={item}>{item}</label>    
                                </span>
                            ))}
                            <error-output className="text-error" htmlFor="text">{formValue.error.department}</error-output>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="salary">Choose your salary : </label>
                        <input className="input" type="number" name="salary" onChange={changeValue} id="salary" value={formValue.salary} />
                        <error-output className="text-error" htmlFor="text">{formValue.error.salary}</error-output>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="startDate">Start Date</label>
                        <div>
                            <select onChange={changeValue} id="day" name="day">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select onChange={changeValue} id="month" name="month"> 
                                <option value="Jan">January</option>
                                <option value="Feb">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="Aug">August</option>
                                <option value="Sept">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select onChange={changeValue} id="year" name="year">
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                            {/* <error-output className="text-error" htmlFor="text">{formValue.error.startDate}</error-output> */}
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea onChange={changeValue} id="notes" className="input" value={formValue.notes} name="notes" placeholder="" ></textarea>
                    </div>
                    <div className="buttonParent">
                        <Link to="/" className="resetButton button cancelButton">Cancel</Link>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton">{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                            <button type="reset" onClick={reset} className="resetButton button">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PayrollForm;