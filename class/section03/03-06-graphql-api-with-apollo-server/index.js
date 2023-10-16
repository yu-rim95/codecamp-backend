import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// 스웨거
const typeDefs = `#graphql
    type Query {
        qqq: String
    }
`

const resolvers = {
    Query: {
        qqq: () => {
            return "zxcvㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹzxvzxㄴ"
        }
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

startStandaloneServer(server) // 4000 ApolloServer에서는 포트가 기본으로 4000으로 설정