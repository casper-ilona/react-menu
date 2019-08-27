import React, {PropsWithChildren, ReactNode} from "react";
import styles from './List.module.css';
import classNames from 'classnames';
import {ListItem} from "./components/ListItem/ListItem";

export interface Props {
    readonly mixClassName?: string
    readonly selectedIndex?: number
    readonly onSelect?: (index: number) => void
}

export interface State {
    readonly selectedIndex: number
}

export class List extends React.Component<PropsWithChildren<Props>, State> {
    state: State = {
        selectedIndex: this.props.selectedIndex || -1,
    };

    handleClick = (selectedIndex: number) => {
        this.setState({selectedIndex})

        if (this.props.onSelect) {
            this.props.onSelect(selectedIndex)
        }
    };

    renderItem = (child: ReactNode, index: number) => (
        <ListItem
            onClick={this.handleClick}
            index={index}
            key={`child-${index}`}
        >
            {child}
        </ListItem>
    )

    render() {
        return (
            <div className={classNames(styles.base, this.props.mixClassName)}>
                {
                    // @ts-ignore
                    React.Children.map(this.props.children(this.state), this.renderItem)
                }
            </div>
        );
    }
}
