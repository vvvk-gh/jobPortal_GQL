export const resolvers = {
    Query: {
        job: () => {
            return {
                id: 'test-id',
                title: 'Software Devloper',
                description: 'responsible for designing, coding, testing and deploying software applications that meet user needs and specifications. They use various programming languages, frameworks and tools to create efficient and functional software products.'
            };
        }
    }
}