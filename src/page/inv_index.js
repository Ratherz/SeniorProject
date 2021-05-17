import React from "react";
import "../asset/style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return <AdminEdit {...adminEditData} />;
}

export default App;


function AdminEdit(props) {
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
    text8,
    miniCard2,
    miniCard4,
    miniCard3,
    miniCard5,
  } = props;

  return (
    <div className="adminedit">
      <div className="navigationexamp-vatartitle-menu">
        <div className="overlap-group2">
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
                <div className="overlap-group3">
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
            <div className="overlap-group4">
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
        <h1 className="text-8 kanit-medium-black-40px">{text8}</h1>
        <div className="flex-row">
          <div className="overlap-group">
            <Link to="/invigilator">
              <img className="mini-card-" src={miniCard2} />
              </Link>
            <img className="mini-card--1" src={miniCard4} />
          </div>
          <div className="overlap-group1">
            <img className="mini-card-" src={miniCard3} />
            <img className="mini-card--1" src={miniCard5} />
          </div>
        </div>
      </div>
    </div>
  );
}
const adminEditData = {
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
  text8: "จัดการข้อมูล",
  miniCard2: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/mini-card-2@2x.svg",
  miniCard4: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/mini-card-4@2x.svg",
  miniCard3: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/mini-card-3@2x.svg",
  miniCard5: "https://anima-uploads.s3.amazonaws.com/projects/604c8a0a2c66c27c7a70a824/releases/604c8a77d0e056831788893e/img/mini-card-5@2x.svg",
};
