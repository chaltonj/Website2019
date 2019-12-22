import * as React from 'react';

import Link from '../Link/Link';
import "./Description.css";

const text = "At work I build Chat for Microsoft.  Working for Microsoft means working at scale.  Our service sends 1 billion messages per week and is quickly scaling up for expected growth in traffic.";

const textForLink1 = "BLM-6 at World Wall";
const photoUrlForLink1 = "BLM6.jpg";
const clickUrlForLink1 = "https://www.mountainproject.com/route/105840317/blm-6";

const textForLink2 = "To Jug, Or Not To Jug on the Moon Board";
const photoUrlForLink2 = "IndoorProject.png";
const clickUrlForLink2 = "https://www.moonboard.com/what-is-the-moonboard";

const text1 = "At home I like to cook new meals and I’m working on a family cookbook.  I also enjoy rock climbing.  My current outdoor project is "
const text2 = " and my current indoor project is "
const text3 = ".";

interface IDescriptionProps {
    setPhotoUrl: (url: string) => void,
    resetPhotoUrl: () => void,
}

export default class Description extends React.Component<IDescriptionProps> {
    public render() {
        const { resetPhotoUrl, setPhotoUrl } = this.props;

        return (
            <div className={ "description__container" }>
                <div className={ "description__text " }>{ text }</div>
                <div className={ "description__text description__text--second" }>
                    <span>{ text1 }</span>
                    <Link text={ textForLink1 } photoUrl={ photoUrlForLink1 } clickUrl={ clickUrlForLink1 } setPhotoUrl={ setPhotoUrl } resetPhotoUrl={ resetPhotoUrl }/>
                    <span>{ text2 }</span>
                    <Link text={ textForLink2 } photoUrl={ photoUrlForLink2 } clickUrl={ clickUrlForLink2 }  setPhotoUrl={ setPhotoUrl } resetPhotoUrl={ resetPhotoUrl }/>
                    <span>{ text3 }</span>
                </div>
            </div>
        );
    }
}