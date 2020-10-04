import React from 'react';
class Filter extends React.Component{

    constructor() {
        super();
    
        this.state = {
            functionMapper:{
                'lang_RU':'onLangRUChange',
                'lang_EN':'onLangENChange',
                'hot':'onHotChange',
                'intermediate':'onIntermediateChange',
                'advanced':'onAdvancedChange',
                'hardcore':'onHardcoreChange',
                'academic':'onAcademicChange'
            }
        }
    }

    handleInputChange(ev){ 
        this.props[this.state.functionMapper[ev.target.name]](ev.target.checked);
    }

    onTextChange(ev){
        this.props.onTextChange(ev.target.value);
    }

    clearFilter(){
        for (const key in this.state.functionMapper) {
            this.props[this.state.functionMapper[key]](false);
        }
        this.props.onTextChange('');
    }

    render() {
      return (
        <div>
          <input type="checkbox" id="lang_RU" name="lang_RU"
            checked = {this.props.lang_RU}
            onChange={(ev) => this.handleInputChange(ev)}></input>
          <label htmlFor="lang_RU">RU</label>
          <input type="checkbox" id="lang_EN" name="lang_EN"
            checked = {this.props.lang_EN}
            onChange={(ev) => this.handleInputChange(ev)}></input>
          <label htmlFor="lang_EN">EN</label>
          <input type="checkbox" id="hot" name="hot"
            checked = {this.props.hot}
            onChange={(ev) => this.handleInputChange(ev)}>
          </input>
          <label htmlFor="hot">HOT</label>
          <input type="checkbox" id="intermediate" name="intermediate"
            checked = {this.props.intermediate}
            onChange={(ev) => this.handleInputChange(ev)}>
          </input>
          <label htmlFor="intermediate">INTERMEDIATE</label>
          <input type="checkbox" id="advanced" name="advanced"
            checked = {this.props.advanced}
            onChange={(ev) => this.handleInputChange(ev)}>        
          </input>
          <label htmlFor="advanced">ADVANCED</label>
          <input type="checkbox" id="hardcore" name="hardcore"
            checked = {this.props.hardcore}
            onChange={(ev) => this.handleInputChange(ev)}>         
          </input>
          <label htmlFor="hardcore">HARDCORE</label>
          <input type="checkbox" id="academic" name="academic"
            checked = {this.props.academic}
            onChange={(ev) => this.handleInputChange(ev)}> 
          </input>
          <label htmlFor="academic">ACADEMIC</label>
          <input type="input" id="text" name="text"  style = {{marginLeft: '5px', marginRight: '5px'}}
            value = {this.props.text}
            onChange={(ev) => this.onTextChange(ev)}> 
          </input>
          <button onClick={() => this.clearFilter()}>Reset filters           
          </button>
        </div>
      )
    }
  }
  export default Filter;