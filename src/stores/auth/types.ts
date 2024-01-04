import type { StoreDefinition, PiniaCustomStateProperties } from 'pinia';

type AuthStore = StoreDefinition<"auth", 
{ token: string | null; }, 
{ isIdentified(state: { token: string | null; } & PiniaCustomStateProperties<{ token: string | null; }>): boolean | undefined; }, 
{ setToken(tokenParam : string) : void }>

export type { AuthStore };