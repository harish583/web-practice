import React from 'react';
import './index.css';
import Dropdown from './Dropdown/index';


export default class SpotCues extends React.Component{
    
    render(){
        var Solution=[
            {
                value:"SOLUTIONS",
                text:"Solution 1"
            },
            {
                value:"SOLUTIONS",
                text:"Solution 2 "
            },
            {
                value:"SOLUTIONS",
                text:"Solution 3"
            }
        ]
        var about=[
            {
                value:"ABOUT",
                text:"About 1"
            },
            {
                value:"ABOUT",
                text:"About 2 "
            },
            {
                value:"ABOUT",
                text:"About 3"
            }
        ]

        return(
        <div class="spotCues">
            <div class="home-holder">
                <div class="home-content">
                    <img src="https://www.spotcues.com/new-design/css/img/left_top.png" />
                    <img class="spotCues-icon" src="https://www.spotcues.com/new-design/css/img/logo-home.svg" />
                    <img class="navbar-background" src="https://www.spotcues.com/new-design/css/img/top_right.png" />
                    <ul class="nav-holder">
                        <li class="navbar-element-link">HOME</li>
                        <li class="navbar-element-link">
                            <Dropdown options={Solution}>SOLUTIONS
                                <i class="fas fa-sort-down"></i>
                            </Dropdown>    
                        </li>
                        <li class="navbar-element-link">
                            <Dropdown options={about}>
                                ABOUT<i class="fas fa-sort-down"></i>
                            </Dropdown>
                        </li>
                        <li class="navbar-element-link">LOGIN</li>
                        <li class="navbar-element-link contact">CONTACT</li>
                    </ul>
                    <div class="home-content-image">
                        <img  className="phone-icon-image" src="../../pramtiSpotCuesImages/Group 17.png" />
                    </div>
                </div>
            </div>
            <img src="https://www.spotcues.com/new-design/css/img/flowy_1.png" class="devider" />
            <div class="single-purpose-apps">
                <div class="single-purpose-apps-header">
                    <div class="single-purpose-apps-header-name">IMPROVE PRODUCTIVITY THROUGH SINGLE-PURPOSE APPS</div>
                    <div class="single-purpose-apps-header-declaration">Micro apps are mini applications that offers “In and Out” experience for accomplishing a specific task.
                        Unlike typical apps that require navigating through a substantial and complex user interface, micro apps
                        are simple HTML “cards” that present themselves contextually and through AI driven intelligent search.
                    </div>
                </div>
                <div class="left-feature">
                    <div class="left-feature-content">
                        <img class="side-by-side-icons" src="../../pramtiSpotCuesImages/Tast-Specific-Interface.svg" alt="Task-specific Interface" />
                        <div class="side-by-side">
                            <h2>Task-specific Interface</h2>
                            <div>Each micro app is designed for a specific purpose to help users complete tasks faster.</div>
                        </div>
                    </div>
                    <div class="left-feature-content">
                        <img class="side-by-side-icons"  src="../../pramtiSpotCuesImages/Everything-In-One-Place.svg" alt="Everything in one place" />
                        <div class="side-by-side">
                            <h2>Everything in one place</h2>
                            <div>All micro apps can be bundled into one Single app to enable user to find all apps they need without requiring to switch between apps.
                            </div>
                        </div>
                    </div>

                </div>
                <div class="right-feature">
                    <div class="right-feature-content">
                        <img class="side-by-side-icons"  src="../../pramtiSpotCuesImages/Intelligent-Search.svg" alt="Intelligent Search" />
                        <div class="side-by-side">
                            <h2>Intelligent Search</h2>
                            <div>AI-enabled search experience intuitively understands the user intent and presents the most relevant micro app.</div>
                        </div>
                    </div>
                    <div class="right-feature-content">
                        <img class="side-by-side-icons"  src="../../pramtiSpotCuesImages/Integrated-Sign-In.svg" alt="Integrated Sign-in" />
                        <div class="side-by-side">
                            <h2>Integrated Sign-in</h2>
                            <div>
                                Single sign-on (SSO) and biometric authentication enable users to log in once and seamlessly switch between
                                micro apps across multiple systems.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <img src="https://www.spotcues.com/new-design/css/img/flowy_1.png" class="devider" />
            <div class="micro-transformational-header">
                <div class="micro-transformational-header-name">TAKE MICRO-TRANSFORMATIONAL APPROACH TO YOUR DIGITAL INITIATIVES</div>
                <div class="micro-transformational-header-discription">
                    SpotCues platform enables enterprises to deliver single purpose apps to dramatically
                    improve user experience and productivity and leverage a micro service based application
                    architecture that provides agility and scale for new digital initiatives.
                </div>
                <div class="micro-transformational-content">
                    <div class="inline-approach">
                        <img src="../../pramtiSpotCuesImages/Incremental-Approach.svg" alt="Incremental Approach" />
                        <div>
                            <h2>Incremental Approach</h2>
                            <div>Single-purpose app concept dramatically reduces the complexity and the scope of developing new apps enabling enterprises to deliver new initiatives faster and in smaller increments.</div>
                        </div>
                    </div>
                    <div class="inline-approach">
                        <img src="../../pramtiSpotCuesImages/RapidDevelopment.svg" alt="Rapid Development" />
                        <div>
                            <h2>Rapid Development</h2>
                            <div>Rich Developer studio with pre-built templates enables enterprises to rapidly churn out new apps via low-code approach.</div>
                        </div>
                    </div>
                    <div class="inline-approach">
                        <img src="../../pramtiSpotCuesImages/Lower-TCO.svg" alt="Lower TCO" />
                        <div>
                            <h2>Lower TCO</h2>
                            <div>HTML 5 based app development approach enables cross-platform compatibility, easy maintenance and dynamic upgrades.</div>
                        </div>
                    </div>

                </div> 
            </div>
            <img src="https://www.spotcues.com/new-design/css/img/flowy_1.png" class="devider" />
            <div class="key-features">
                <div class="key-features-header">Key Features</div>
                <div class="left-feature">
                    <div class="left-feature-content">
                        <img  class="side-by-side-icons" src="../../pramtiSpotCuesImages/Enterprise-Grade-Security.svg" alt="Enterprise-grade Security" />
                        <div class="side-by-side">
                            <h2>Enterprise-grade Security</h2>
                            <div>Enterprise-grade security features such as biometric validation, 2FA, token-based authentication, data encryption, etc. to ensure security and compliance.</div>
                        </div>
                    </div>
                    <div class="left-feature-content">
                        <img class="side-by-side-icons" src="../../pramtiSpotCuesImages/Dynamic-provisioning.svg" alt="Dynamic Provisioning" />
                        <div class="side-by-side">
                            <h2>Dynamic Provisioning</h2>
                            <div>HTML5 based approach enables enterprises to sidestep App Store and push the apps dynamically to their users. </div>
                        </div>
                    </div>
                    <div class="left-feature-content">
                        <img class="side-by-side-icons" src="../../pramtiSpotCuesImages/Contextual-Access.svg" alt="Contextual Access" />
                        <div class="side-by-side">
                            <h2>Contextual Access</h2>
                            <div>Access to micro apps can be contextually made available or restricted based on role, department, location, etc.</div>
                        </div>
                    </div>
                </div>
                <div class="right-feature">
                    <div class="right-feature-content">
                        <img class="side-by-side-icons" src="../../pramtiSpotCuesImages/Multi-channel-cross-compliant.svg" />
                        <div class="side-by-side">
                            <h2>Cross-compliant</h2>
                            <div>Enable your users to access micro apps conveniently from the device and platform of their choice.</div>
                        </div>
                    </div>
                    <div class="right-feature-content">
                        <img class="side-by-side-icons" src="../../pramtiSpotCuesImages/Push-notifications.svg" alt="Push Notifications" />
                        <div class="side-by-side">
                            <h2>Push Notifications</h2>
                            <div>Each micro app can leverage the power of push notifications and create deep link to individual micro apps.</div>
                        </div>
                    </div>
                    <div class="right-feature-content">
                        <img class="side-by-side-icons" src="../../pramtiSpotCuesImages/RealTime-Insights.svg" alt="Real-time Insights" />
                        <div class="side-by-side">
                            <h2>Real-time Insights</h2>
                            <div>Get deep insights into usage, usage pattern and adoption through rich real-time metrics.</div>
                        </div>
                    </div>

                </div> 
            </div>
            <img src="https://www.spotcues.com/new-design/css/img/flowy_1.png" class="devider" />
            <div class="footer">
                <h3 class="footer-header">Learn more about how we can help you connect your apps, people and systems. Let's talk!</h3>
                <button class="contactus-button">CONTACT US</button>
                <ul class="footer-links">
                    <li>© 2019 SpotCues Inc. All Rights Reserved.</li>
                    <li>Terms of Use </li>
                    <li>|  Privacy Policy</li>
                </ul>
                <img class="left-footer" src="https://www.spotcues.com/new-design/css/img/foot_1.png" />
                <img class="right-footer" src="https://www.spotcues.com/new-design/css/img/foot_2.png" />
            </div>
        </div>)
    }
}