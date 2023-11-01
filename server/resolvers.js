// Getting the jobs data from the db query which is function at jobs.js
import { getJobs } from "./db/jobs.js"

export const resolvers = {
    Query: {
        jobs: () => getJobs(),
    },

    Job: {
        date: (job) => ISOtoDate(job.createdAt),
    }
}

function ISOtoDate(value) {
    return value.slice('0', 'yyyy-mm-dd'.length)
}