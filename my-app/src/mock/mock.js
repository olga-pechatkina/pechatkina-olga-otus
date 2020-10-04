const mockDB = {
    articles:[{
        articleText: 'hallo this is super interesting article about how to create such filters',
        articleComplexity: 'HARDCORE',
        articleAuthor: 'Pechatkina',
        hot: true,
        lang: 'RU'
        },
        {
        articleText: 'CSS resets',
        articleComplexity: 'INTERMEDIATE',
        articleAuthor: 'Popov',
        hot: true,
        lang: 'EN'
        },
        {
        articleText: 'How to stub rest and some other very interesting stuff',
        articleComplexity: 'ACADEMIC',
        articleAuthor: 'Stuboff',
        hot: false,
        lang: 'RU'
        },
        {
        articleText: 'From REST to GraphQL - or the other way?',
        articleComplexity: 'HARDCORE',
        articleAuthor: 'Pechatkina',
        hot: false,
        lang: 'RU'
        },
        {
        articleText: 'From MySql to MongoDB',
        articleComplexity: 'ADVANCED',
        articleAuthor: 'Storyteller',
        hot: false,
        lang: 'EN'
        },
    ]
  }

  const mockDBJson = JSON.stringify(mockDB);
  const mockAPI = {
    getArticles: () => Promise.resolve(mockDBJson)
  }
    
  export default mockAPI;