import React from "react";
import styles from './ListItem.module.css';

export interface Props {
    readonly index: number;
    readonly onClick: (index: number) => void
}

export class ListItem extends React.Component<Props> {
    handleClick = () => {
        this.props.onClick(this.props.index)
    };

    render() {
        return (
            <div className={styles.base} onClick={this.handleClick}>
                {this.props.children}
            </div>
        )
    }
}
