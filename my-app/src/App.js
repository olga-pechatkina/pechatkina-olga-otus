import React from 'react';
import './App.css';
import Filter from './Filter.js';
import ArticleList from './ArticleList.js';
import axios from 'axios';
import mockAPI from './mock/mock.js'

const serverAPI = {
  getArticles:() => axios.get("/articles"),
}
const currentAPI = serverAPI;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      lang_RU: false,
      lang_EN: false,
      hot: false,
      intermediate: false,
      advanced: false,
      hardcore: false,
      academic: false,
      text: '',
      articles:[]
    };
  }

  componentDidMount(){
    Object.assign(currentAPI, mockAPI);
    currentAPI.getArticles()
      .then(data => {
        let arr = JSON.parse(data);
        this.setState({ 
          articles: arr["articles"]
        });
      })
  }

  _handleLangRUChange = value => this.setState({lang_RU: value});
  _handleLangENChange = value => this.setState({lang_EN: value});
  _handleHotChange = value => this.setState({hot: value});
  _handleIntermediateChange = value => this.setState({intermediate: value});
  _handleAdvancedChange = value => this.setState({advanced: value});
  _handleHardcoreChange = value => this.setState({hardcore: value});
  _handleAcademicChange = value => this.setState({academic: value});  
  _handleTextChange = value => this.setState({text: value});  

  render(){
    return (
      <div className="App">
        <Filter
          lang_RU={this.state.lang_RU} 
          lang_EN={this.state.lang_EN} 
          hot={this.state.hot} 
          intermediate={this.state.intermediate}   
          advanced={this.state.advanced} 
          hardcore={this.state.hardcore} 
          academic={this.state.academic}  
          text={this.state.text}                    
          onLangRUChange={this._handleLangRUChange} 
          onLangENChange={this._handleLangENChange}
          onHotChange={this._handleHotChange} 
          onIntermediateChange={this._handleIntermediateChange}
          onAdvancedChange={this._handleAdvancedChange}
          onHardcoreChange={this._handleHardcoreChange} 
          onAcademicChange={this._handleAcademicChange}
          onTextChange={this._handleTextChange}
        />
        <ArticleList
          articles={this.state.articles.filter(item => (((item.lang === 'RU' && this.state.lang_RU)||(item.lang === 'EN' && this.state.lang_EN) || (!this.state.lang_RU && !this.state.lang_EN))
          &&((item.articleComplexity === 'INTERMEDIATE' && this.state.intermediate) || (item.articleComplexity === 'ADVANCED' && this.state.advanced) || (item.articleComplexity === 'HARDCORE' && this.state.hardcore) || ((item.articleComplexity === 'ACADEMIC' && this.state.academic))||(!this.state.intermediate && !this.state.advanced && !this.state.hardcore && !this.state.academic))
          && (item.hot === this.state.hot || !this.state.hot) && ((item.articleAuthor.indexOf(this.state.text) !== -1) || (item.articleText.indexOf(this.state.text) !== -1) || !this.state.text)))}
        />
      </div>
    );
  }
}
export default App;
