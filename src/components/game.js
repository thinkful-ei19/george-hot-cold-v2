import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends  React.Component {
   constructor(props){
       super(props)
       this.state = {
         guess:[],
         counter:null,
         usednums:[]  
       }
   }

   makeGuess(feedback) {
       this.setState({
            guess: this.state.guess
       })
   }
   
    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback={(guess) => {
                    this.makeGuess(guess)
                }} />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

