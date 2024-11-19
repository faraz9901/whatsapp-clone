export type User = {
    email: string
    name: string
    _id: string
}


export enum Status {
    loading = "loading",
    idle = "idle",
    submitting = "submitting",
    error = "error",
    success = "success"
}