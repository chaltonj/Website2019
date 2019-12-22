import * as React from 'react';

import "./Link.css";

interface ILinkProps {
    photoUrl: string,
    clickUrl: string,
    text: string,
    setPhotoUrl: (url: string) => void,
    resetPhotoUrl: () => void
}

export default class Link extends React.Component<ILinkProps> {

    public onMouseEnter = () =>
    {
        this.props.setPhotoUrl(this.props.photoUrl);
    }

    public onMouseLeave = () => {
        this.props.resetPhotoUrl();
    }

    public render() {
        const { text, clickUrl } = this.props;

        return (
            <a
                href={ clickUrl }
                target="_blank"
                className={ "link__text " }
                onMouseEnter={ this.onMouseEnter }
                onMouseLeave={ this.onMouseLeave }>{ text }</a>
        );
    }
}