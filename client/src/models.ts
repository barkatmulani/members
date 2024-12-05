export type Member = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    details: MembershipType,
    visits?: MemberVisit[]
  }
  
  type MembershipType = {
    memberType: 'Gold' | 'Silver' | 'Bronze'
  }
  
  type MemberVisit = {
    facility: string,
    visitDate: string,
    visitTime: string,
  }