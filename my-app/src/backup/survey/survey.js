
import React, { Component } from 'react';
import SurveyItem from './SurveyItem/SurveyItem';
// import "./style.css";
import "./survey.css";
import "./icomoon/style.css";
// import Ajax from "./ajaxCall";
import { getSurveys } from './surveyService'

const surveyData = {
    "_id": "5c67ecb285543a30690c77ff",
    "modifiedAt": "2019-02-16T10:57:54.612Z",
    "__v": 0,
    "users": [],
    "createdAt": "2019-02-16T10:57:54.611Z",
    "image": "https://secure.surveymonkey.com/smassets/responseweb/smlib.globaltemplates/1.14.2/assets/sm_logo_fb.png",
    "_owner": "58086a7cc6d233c46dffafa1",
    "_app": "5afbc7485d74bc61a1058263",
    "_channel": "587c56497c3465c078f6f2df",
    "url": "https://www.surveymonkey.com/r/22XZM8K",
    "title": "Example Survey Another1"
};

class Survey extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [
                surveyData
            ]
        }
    }
    componentDidMount() {
        getSurveys()
        .then((response) => {
            this.setState({
                list: response.result
            });
        });
    }

    render(){
        const { list = [] } = this.state;
        return(
            <div className="container">
                <div className="header">OPINIONS</div>
                <div id="survey">
                    {
                        list.map((item) => {
                            return <SurveyItem data={item} />;
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Survey;