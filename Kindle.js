import React, { Component } from 'react';
import DisplayBooks from "./DisplayBooks";


class Kindle extends Component {
constructor(props) {
    super(props);
    this.state = {
    books:[
        {bookName: "", numberOfStars: 0 },
        {bookName: "", numberOfStars: 0}]
    }
}

submitInput = (event) =>
{
    this.setState(
        {
            [event.target.id]: event.target.value
        }
    )
};

bookFunction = (event) =>
{
    let anotherCollection = {
        bookName: this.state.bookName,
        numberOfStars: this.state.numberOfStars};

        this.state.bookArray.push(anotherCollection);

        this.setState({bookArray:this.state.bookArray});

    event.preventDefault()
    }







render() {
    return (
<div>
    <DisplayBooks/>
</div>
}


}

export default Kindle;
