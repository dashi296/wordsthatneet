import React from 'react';
import logo from './logo.svg';
import './App.css';

import Words from './Words.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }

    this.handleChangeWords = this.handleChangeWords.bind(this);
    this.handleChangeSector = this.handleChangeSector.bind(this);
    this.handleChangeJob = this.handleChangeJob.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
  }
  
  handleChangeWords(e){
    let words = e.target.value;
    let words_html = words.replace(/\r?\n/g, '<br>');
    
    this.setState({words: words, words_html: words_html});
    console.log(this.state);
  }

  handleChangeSector(e){
    let sector = e.target.value;
    this.setState({sector: sector});
  }
  
  handleChangeJob(e){
    let job = e.target.value;
    this.setState({job: job});
  }

  handleChangeAge(e){
    let age = e.target.value;
    this.setState({age: age});
  }

  render(){
    return (
      <React.Fragment>
        <h1>言葉たちメーカー</h1>
        <div className="input-field">
          <label>言葉</label>
          <textarea name="words" value={this.state.words} onChange={(e)=>this.handleChangeWords(e)} placeholder="here" />
          <br />
          <label>業種</label>
          <input type="text" value={this.state.sector} onChange={(e)=>this.handleChangeSector(e)} placeholder="sector" />
          <br />
          <label>職種</label>
          <input type="text" value={this.state.job} onChange={(e)=>this.handleChangeJob(e)} placeholder="job" />
          <br />
          <label>年齢</label>
          <select value={this.state.age} onChange={(e)=>this.handleChangeAge(e)}>
            <option value=""></option>
            <option value="10">10代</option>
            <option value="20">20代</option>
            <option value="30">30代</option>
            <option value="40">40代</option>
          </select>
        </div>

        <div className="container">
          <div className="title">ガチニートの言葉たち</div>
          <div id="capture">
            <Words words={this.state.words_html} />
            <div className="user-info">
              <span className="sector">{this.state.sector}</span>
              { this.state.sector && this.state.job && <span>／</span> }
              <span className="job">{this.state.job}</span>
              { this.state.job && this.state.age && <span>・</span> }
              { this.state.age && <span className="age"><span className="text-combine">{this.state.age}</span>代</span>}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
