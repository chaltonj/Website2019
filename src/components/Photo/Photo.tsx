import * as React from 'react';

import "./Photo.css";
// const messageFirstLine: string = "This website is managed by Chris Altonji.";
// const messageSecondLine: string = "Please send me a note if you have a good idea for what should be here.";
// const email: string = "caltonji@gmail.com";
// const emailSubject: string = "Suggestion for altonji.com";
// const mailToLink: string = "mailto:" + email + "?Subject=" + emailSubject;

interface IPhotoProps {
    url: string
}

export default class Message extends React.Component<IPhotoProps> {
    

    public render() {
        const { url } = this.props;

        return (
            <div className={ "photo__container" }>
                <img className={ "photo__photo" } src={ url } />
            </div>
        );
    }
}