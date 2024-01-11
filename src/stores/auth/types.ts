import type { StoreDefinition } from 'pinia';

type AuthStore = StoreDefinition<
    "auth", 
    { token: string | null; }, 
    { isIdentified(state: { token: string | null; }): boolean; }, 
    { setToken(tokenParam : string) : void,  logout(): void }
>

export type { AuthStore };