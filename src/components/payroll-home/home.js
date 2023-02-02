import React,{ useState , useEffect, Component} from "react";
import { useParams, Link, renderMatches} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import addButton from '../../assets/icons/add-24px.svg';
import './home.css';
import Display from "./display";

class Home extends React.Component {

    render() {
    return (
    <div>  
        <header class="header-content header">
            <div class="logo-content">
                <img src={logo} alt="" />
                <div>
                    <span class="emp-text">EMPLOYEE</span><br />
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="header-content">
                <div class="emp-detail-text">
                    Employee Details <div class="emp-count"></div>
                </div>
                <Link to="/add-employee" class="add-button">
                    <img src={addButton} alt="" />Add User
                </Link>
            </div> 
            <div class="table-main">
                <Display />      
            </div>
        </div>
    </div>  
    );
    }
}

export default Home;