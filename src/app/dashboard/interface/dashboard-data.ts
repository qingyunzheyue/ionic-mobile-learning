export interface DashboardData{
    OutstandingProfileActions: OutstandingProfileActions[],
    OutstandingExceptions: OutstandingExceptions[],
    BrokerageAccount: BrokerageAccount[]
}


export interface OutstandingProfileActions{
    actionRequiredBy: string,
    category: string,
    status: string
}


export interface OutstandingExceptions{
    actionRequiredBy: string,
    holdingName: string,
    holdingType: string,
    status: string
}

export interface BrokerageAccount{
    accountName: string,
    accountNumber: string,
    status: string,
    authorizationStatus: string
}

