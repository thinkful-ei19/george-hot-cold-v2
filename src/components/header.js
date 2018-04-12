import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props){
        super(props)

        this.state={
            show:false
        }
    }

    showClick() {
        this.setState({
            show: !this.state.show
        });
    }
    hideClick() {
        this.setState({
            show: false
        })
    }
    
        render() {
            return (
                <header>
                    <TopNav onClickHandle={() => this.showClick()}/>
                    {this.state.show && <InfoModal onClickHandle={() => this.hideClick()}/>}
                    <h1>HOT or COLD</h1>
                </header>
        );
    };
};
