
export type GrantedAuthority = {authority:string}

export class ResponseLogin {

    token:string
    userName: string
    authorities: GrantedAuthority[]

}
