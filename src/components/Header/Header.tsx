import * as React from 'react';

import "./Header.css";
const headerTitle = "Chris Altonji";
const headerSubtitle = "47.619564, -122.321716 (Seattle, WA)";

export default class Header extends React.Component {
    public render() {
        return (
            <div className={ "header__container" }>
                <div className={ "header__title header__text" }>{ headerTitle }</div>
                <div className={ "header__subtitle header__text" }>{ headerSubtitle }</div>
            </div>
        );
    }
}