export type Partner = { id: number; name: string; logo?: string; url?: string; };
export type Contacts = { theater: string; email?: string; phone?: string; socials?: {label:string; url:string;}[]; partners?: Partner[]; };
