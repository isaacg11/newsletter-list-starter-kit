import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class NewsletterForm extends Component {

    render() {
        return (
            <div>
                <h1>Subscribe For Our Monthly Newsletter!</h1>
                <input type="email" onChange={(e) => this.setState({userEmail: e.target.value})}/>
                <button onClick={() => this.subscribe()}>Submit</button>
            </div>
        )
    }

    subscribe() {
        
    }

}

render(
    <NewsletterForm />,
    document.getElementById('root')
)