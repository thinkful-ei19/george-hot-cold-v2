import React, {Component} from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default class GuessSection extends Component {
    
    render() {
        return (
            <section>
                <h2 id="feedback">{props.feedback}</h2>
                <GuessForm />
            </section>
        );
    }
}

