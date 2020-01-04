
import React from "react";
import './styles.css';
import DataContainer from './content';

export default class PopupHolder extends React.Component{
    render(){
        return(
            <div>
                {/* <button className="button">Show Welcome</button>
                <button className="button">Show data</button> */}
                {/* <div className="background"></div>
                <div className="container">
                    {/* <div className="cross-mark">X</div>
                    <div className="close-button">Close</div>*/}
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>secretIdentity</th>
                                <th>age</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <DataContainer />
                            <DataContainer />
                        </tbody>
                    </table>
                {/* </div>  */}
            </div>
        )
    }
} 