import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={props.onClickHandle} className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={(e)=> location.reload(e)} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

