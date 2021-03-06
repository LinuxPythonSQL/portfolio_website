import React from "react"
import author from "../BlackSleeves.jpg"
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                    <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">About Me</h1>
                        <p>
                            Hello World! My name is Jason Lim. I'm a Data Analyst/Data Scientist. I started my journey in 2019 where I was presented with a task with only a couple excel workbooks.
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default AboutMe;
