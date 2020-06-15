import React, { Component } from 'react';
import './App.css';
import CommentCard from './Components/CommentCard';
import Button from './Components/Button/Button';

class App extends Component {

  state = {
    error: null,
    loading: true,
    comments: null,
    currentPage: 1
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        response.json()
          .then(result => {
            this.setState({loading: false, comments: result});
          })
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: true })
      })
  }




  nextPageHandler = () => {
    if(this.state.currentPage < this.state.comments.length / 4)
    this.setState((prevState) => {
      return {currentPage: prevState.currentPage + 1};
    })
  }
  prevPageHandler = () => {
    if(this.state.currentPage > 1)
    this.setState((prevState) => {
      return {currentPage: prevState.currentPage - 1};
    })
  }

  render() {
    let render = null;
    let comments = this.state.comments;

    if(this.state.loading)
      render = <p> Laoding..., Please wait. </p>

    if(this.state.error)
      render = <p> Oops!, Something went wrong. </p>

    if(comments){
      const curPage = this.state.currentPage;
      render = comments.slice(curPage, curPage+4).map(comment => <CommentCard 
        key={comment.id} 
        name={comment.name} 
        email={comment.email} 
        body={comment.body} />)
    }
      
    return (
      <div className="App">
         {render}
         <div className='btn__container'>
            <Button onClick={this.prevPageHandler} btnTxt='PREVIOUS' />
            {this.state.currentPage}
            <Button onClick={this.nextPageHandler} btnTxt='NEXT' />
         </div>
      </div>
    );
  }
}

export default App;
