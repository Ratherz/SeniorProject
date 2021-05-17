import React from "react";
import "../asset/styleInv_main.css";
import axios from "axios";

function invigilator() {
    return <AdminOfficemain {...adminOfficeData} />;
}

export default invigilator;


function AdminOfficemain(props) {
    const {
        text2,
        vector,
        text1,
        vector2,
        text3,
        vector3,
        text4,
        vector4,
        text5,
        biTable,
        text6,
        semiAutomaticExam,
        text7,
        text12,
        // image2,
        // text8,
        // text9,
        // text10,
        // text11,
        // text13,
        // text14,
        // text15,
        // text16,
        // text17,
        // text18,
    } = props;

    function table() {
        // this.state = {
        //     datatable: []
        // }
        
            axios.get('http://localhost:5000/inv/getinv').then((res) => {
            // this.setState({datatable: res});
            console.log(res)
          });
        return (
            // <tr key={index}>
            //     <td>{index}</td>
            //     <td>{item.user_id}</td>
            //     <td>{item.Fullname}</td>
            //     <td>{item.branch_name}</td>
            //     <td>{item.faculty_name}</td>
            //     <td>{item.user_year + 543}</td>
            //     <td><p style={{ color: item.status_color }} >{item.status_name}</p></td>
            //     <td><button type="button" className="btn btn-outline-danger" onClick={() => this.downloadOne(index - 1)}>ดาวน์โหลด</button></td>
            // </tr>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>

        )
    }

    return (
        <div className="adminoffice">
            <div className="navigationexamp-vatartitle-menu">
                <div className="overlap-group1">
                    <div className="navigationeleme-tsright-divider">
                        <div className="divider"></div>
                    </div>
                    <div className="navigationeleme-reaavatar-title">
                        <div className="wpfadministrator"></div>
                        <div className="divider-1"></div>
                    </div>
                    <div className="navigationeleme-ubtitleinactive">
                        <div className="text-2 kanit-light-star-dust-14px">{text2}</div>
                        <div className="navigationeleme-defaultinactive">
                            <div className="icon">
                                <div className="overlap-group2">
                                    <div className="icomoon-freeexit">
                                        <img className="vector" src={vector} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-1 kanit-light-black-14px">{text1}</div>
                        </div>
                    </div>
                    <div className="navigationeleme-defaultselected">
                        <div className="iconactiondashboard">
                            <img className="vector-1" src={vector2} />
                        </div>
                        <div className="text-3 kanit-light-black-14px-2">{text3}</div>
                    </div>
                    <div className="navigationeleme-defaultinactive-1">
                        <div className="icon-1">
                            <div className="akar-iconssearch">
                                <img className="vector-2" src={vector3} />
                            </div>
                        </div>
                        <div className="text-4 kanit-light-black-14px-2">{text4}</div>
                    </div>
                    <div className="navigationeleme-defaultinactive-2">
                        <div className="overlap-group3">
                            <div className="icon-1">
                                <div className="fluentcalendar-edit-20-filled">
                                    <img className="vector-3" src={vector4} />
                                </div>
                            </div>
                            <div className="text-5 kanit-light-dodger-blue-14px">{text5}</div>
                        </div>
                    </div>
                    <div className="navigationeleme-defaultinactive-3">
                        <div className="icon">
                            <div className="bitable" style={{ backgroundImage: `url(${biTable})` }}></div>
                        </div>
                        <div className="text-6 kanit-light-black-14px">{text6}</div>
                    </div>
                    <div className="divider-2"></div>
                    <div className="semi-automatic-exam montserrat-extra-bold-indigo-19px">{semiAutomaticExam}</div>
                    <div className="text-7 montserrat-semi-bold-neon-carrot-14px">{text7}</div>
                </div>
            </div>
            <div className="flex-col">
                <h1 className="text-12 kanit-medium-black-40px">{text12}</h1>
                <div className="overlap-group">
                    {/* <img className="image-2" src={image2} /> */}
                    <h1>รายชื่ออาจารย์และเจ้าหน้าที่</h1>
                    <br />

                    <table class="table table-hover ">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">ลำดับ</th>
                                <th scope="col">ชื่อ-นามสกุล</th>
                                <th scope="col">สถานะ</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
const adminOfficeData = {
    text2: "เพิ่มเติม",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/vector-4@2x.svg",
    text1: "ออกจากระบบ",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/vector-14@2x.svg",
    text3: "หน้าหลัก",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/vector-6@2x.svg",
    text4: "ค้นหาตารางสอบ",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/vector-23@2x.svg",
    text5: "จัดการข้อมูล",
    biTable: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/vector-8@2x.svg",
    text6: "สร้างตารางสอบ",
    semiAutomaticExam: "Semi-Automatic Exam",
    text7: "Schedule Management System",
    text12: "ข้อมูลอาจารย์และเจ้าหน้าที่",
    image2: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8fa8f45039e92fe62e08/img/image-2-2@1x.svg",
    text8: "แก้ไข",
    text9: "แก้ไข",
    text10: "แก้ไข",
    text11: "เพิ่ม",
    text13: "รายชื่ออาจารย์และเจ้าหน้าที่",
    text14: "สถานะ",
    text15: "ปกติ",
    text16: "ปกติ",
    text17: "ปกติ",
    text18: "ผศ.ดร.จุฬาลักษณ์ วัฒนานนท์",
};

