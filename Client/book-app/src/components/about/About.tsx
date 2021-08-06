import React from "react";

class About extends React.Component {
    render(){
        return(
            <section className="about">
                <p className="text">
                    <u>Technology</u><br/>NodeJS, JavaScript, TypeScript, HTML, CSS <br/><br/>
                    <u>Frameworks</u><br/>Express.js, Ajv, React, SCSS <br/><br/>
                    <u>Architecture</u><br/>Model-view-controller (MVC) <br/><br/>
                    <u>FE/BE communication</u><br/>REST API
                </p>
            </section>
        )
    }
}

export {About};