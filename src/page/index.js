import React, { Component } from "react";
import '../asset/style.css';
import notebook from '../asset/img/notebook.png'
class Index extends Component {
    constructor() {
        super()
    }
    componentWillMount() {

    }
    render() {
        return (
            <div class="bg-bottom">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <div class="text">
                                <h1 class="title">Semi-Automatic Exam</h1>
                                <h3 class="text-1">Schedule Management System</h3>
                                <p class="text-2">
                                    ระบบจัดการตารางสอบกึ่งอัตโนมัติ<br />กรณีศึกษา
                            คณะวิทยาศาสตร์และเทคโนโลยี<br />มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
                        </p>
                                <div class="button">
                                    <button type="button" class="btn btn-light" style={{paddingLeft:"25px",paddingRight:"25px"}}>ค้นหา</button>
                                    <button type="button" class="btn btn-light" style={{marginLeft: "5px"}}>เข้าสู่ระบบ</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="notebook">
                                <img src={notebook}/>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Index;