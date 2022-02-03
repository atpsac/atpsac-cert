
export type GrantedAuthority = {authority:string}

export class ResponseLogin {

    jwt:string
    user: string
    authorities: GrantedAuthority[]

}
