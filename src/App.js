import React from 'react';
import logo from './logo.svg';
import './App.css';
import html2canvas from "html2canvas";

import Words from './Words.js';

class App extends React.Component {
  constructor(props){
    super(props);
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0"+(today.getMonth() + 1)).slice(-2);
    let day = ("0"+(today.getDate())).slice(-2); 
    this.state = {
      year: year,
      month: month,
      day: day,
      image: ""
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

  downloadImage(){
    window.scrollTo(0,0);
    let temp_words = this.state.words_html;
    let words_html = temp_words.replace(/ー/g, '<span class="rotate">ー</span>');
    
    let temp_sector = this.state.sector;
    let sector_html = temp_sector.replace(/ー/g, '<span class="rotate">ー</span>');
    
    let temp_job = this.state.job;
    let job_html = temp_job.replace(/ー/g, '<span class="rotate">ー</span>');

    this.setState(
      {
        words_html: words_html,
        sector: sector_html,
        job: job_html
      }, function () {
      console.log(this.state.words_html);
      html2canvas(document.querySelector("#container")).then(canvas => {
      let link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "words.png";
      link.click();

      this.setState({
        words_html: temp_words,
        sector: temp_sector,
        job: temp_job
        });
      });
    });
    
  }

  render(){
    return (
      <React.Fragment>
        <h1 className="heading">働かない言葉たちメーカー</h1>
        <div className="input-field">
          <label>言葉</label>
          <textarea name="words" value={this.state.words} onChange={(e)=>this.handleChangeWords(e)} placeholder="ことば" />
          <br />
          <label>業種</label>
          <input type="text" value={this.state.sector} onChange={(e)=>this.handleChangeSector(e)} placeholder="業種" />
          <br />
          <label>職種</label>
          <input type="text" value={this.state.job} onChange={(e)=>this.handleChangeJob(e)} placeholder="職種" />
          <br />
          <label>年齢</label>
          <select value={this.state.age} onChange={(e)=>this.handleChangeAge(e)}>
            <option value=""></option>
            <option value="10">10代</option>
            <option value="20">20代</option>
            <option value="30">30代</option>
            <option value="40">40代</option>
            <option value="50">50代</option>
            <option value="60">60代</option>
            <option value="70">70代</option>
            <option value="80">80代</option>
            <option value="90">90代</option>
          </select>
          <input type="submit" value="Download" onClick={()=>this.downloadImage()} />
        </div>

        <div id="container">
          <div className="title">働かない言葉たち</div>
            <div id="canvas-container">
              <div id="canvas">
              <Words words={this.state.words_html} />
              <div className="user-info">
                <span className="sector" dangerouslySetInnerHTML={{__html: this.state.sector}}></span>
                { this.state.sector && this.state.job && <span>／</span> }
                <span className="job" dangerouslySetInnerHTML={{__html: this.state.job}}></span>
                { this.state.job && this.state.age && <span>・</span> }
                { this.state.age && <span className="age"><span className="text-combine">{this.state.age}</span>代</span>}
              </div>
            </div>
            <div className="date">{this.state.year}. {this.state.month}. {this.state.day}</div>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}

export default App;
