import React from 'react';
import styles from './App.module.css';
import {List, State as ListState} from "../List/List";
import classNames from "classnames";

const data = [1, 2, 3, 4, 5, 6];

export interface Props {

}

export interface State {
    readonly selectedIndex: number
}

export class App extends React.Component<Props, State> {
    state: State = {
        selectedIndex: -1
    };

    handleSelect = (selectedIndex: number) => {
        this.setState({selectedIndex})
    };

    render() {
        const style = {'--selected-index': this.state.selectedIndex} as any;

        return (
            <div className={styles.base}>
                <div className={styles.content}>
                    <div className={classNames(styles.highlight, {
                        [styles.highlight__disabled]: this.state.selectedIndex === -1,
                    })} style={style}/>
                    <List onSelect={this.handleSelect}>
                        {({selectedIndex}: ListState) => {
                            return data.map((dataItem, index) => {
                                const isSelected = index === selectedIndex;
                                const baseClassName = classNames(styles.item, {
                                    [styles.item__first]: !isSelected && index === 0,
                                    [styles.item__last]: !isSelected && index === (data.length - 1),
                                    // [styles.item__selected]: isSelected,
                                });

                                return (
                                    <div className={baseClassName}>{dataItem}</div>
                                )
                            })
                        }}
                    </List>
                </div>
            </div>
        );
    };
}

export default App;
