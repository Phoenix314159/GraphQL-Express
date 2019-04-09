module.exports =  `
    type Text{
        id: Int,
        name: String!,
        paragraph: String!
    }
     type Query{
        allData: [Text]
    }
`