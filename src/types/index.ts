export interface User {
    id: number,
    username: string,
    email: string
}

export interface CreateUserRequest {
    username: string,
    email: string
}

export interface AnalyticsData {
    totalUsers: number,
    emailDomains: Record<string, number>
    topDomains: Array<{domain: string; count: number}>
}