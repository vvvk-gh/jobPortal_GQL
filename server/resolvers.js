import { getJobs } from "./db/jobs.js"
import { getCompany } from "./db/companies.js"

export const resolvers = {
    Query: {
        jobs: () => getJobs()
    },

    Job: {
        /*each job is associated with a company 
        so we keep company inside a job at schema */
        company: (job) => getCompany(job.companyId),
        date: (job) => ISOtoDate(job.createdAt)
    }
}

function ISOtoDate(value) {
    return value.slice('0', 'yyyy-mm-dd'.length)
}