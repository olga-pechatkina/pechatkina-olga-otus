import React from 'react';
import Article from './Article.js';

class ArticleList extends React.Component{
    render() {
        return (
            <div style={{height: '700px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'flex-start'}}>
            {this.props.articles.map((article, index) => (
                <Article
                    key={index}
                    theme={article.articleText}
                    text={article.articleAuthor}
                    complexity={article.articleComplexity}
                    lang={article.lang}
                />
            ))}
            </div>
        )
    }
}
export default ArticleList;