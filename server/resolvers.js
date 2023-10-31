export const resolvers = {
    Query: {
        job: () => {
            return {
                id: null,
                title: 'Software Engineer',
                description: 'Testing debugging and building the user stories'
            }
        }
    }
}