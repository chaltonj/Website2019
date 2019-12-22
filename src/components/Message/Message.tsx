import * as React from 'react';

import "./Message.css";
const messageFirstLine: string = "This website is managed by Chris Altonji.";
const messageSecondLine: string = "Please send me a note if you have a good idea for what should be here.";
const email: string = "caltonji@gmail.com";
const emailSubject: string = "Suggestion for altonji.com";
const mailToLink: string = "mailto:" + email + "?Subject=" + emailSubject;

export default class Message extends React.Component {
    public render() {
        return (
            <div className={ "message__container" }>
                <div className={ "message_textCircle " }>
                    <div className={ "message__message" }>{ messageFirstLine }</div>
                    <div className={ "message__message" }>{ messageSecondLine }</div>
                    <div className={ "message_email message_email" }><a className={ "message_emailLink" } href={ mailToLink }>{ email }</a></div>
                </div>
            </div>
        );
    }
}