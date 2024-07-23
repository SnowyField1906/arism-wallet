type Info = {
    email: string
    name: string
    image: string
}
type SessionUser = {
    jwt: JWT
    info: Info
    networkFactor: Point | undefined
    deviceFactor: Point | undefined
    recoveryFactor: Point | undefined
}
type JWT = {
    access_token: string
    token_type: string
    id_token: string
    refresh_token: string
    scope: string
    expires_at: number
    session_state: string
}
