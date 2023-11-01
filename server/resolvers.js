// Getting the jobs data from the db query which is function at jobs.js
import { getJobs } from "./db/jobs.js"

export const resolvers = {
    Query: {
        jobs: () => getJobs(),
    }
}