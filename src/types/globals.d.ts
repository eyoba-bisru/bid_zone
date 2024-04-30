export {};

// Create a type for the roles
export type Roles = "admin" | "bidder" | "creator";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
