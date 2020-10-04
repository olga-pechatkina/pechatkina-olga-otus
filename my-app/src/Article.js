import React from 'react';
class Article extends React.Component{
    divStyle = {
        width: '200px',
        height: '200px',
        borderStyle: 'solid',
        borderColor: 'black',
        margin: '10px'
      }
    divAuthorStyle = {
        margin: '20px'
    }
    render() {
        return (
            <div style={this.divStyle}>
                <div style = {{margin: '20px', fontWeight: '600'}}>
                    {this.props.theme}
                </div>
                <div style = {this.divAuthorStyle}>
                    {this.props.text}
                </div>
                <div style = {this.divAuthorStyle}>
                    {this.props.complexity} / {this.props.lang}
                </div>
            </div>
        )
    }   
}
export default Article;