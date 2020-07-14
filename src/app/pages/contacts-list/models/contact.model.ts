export interface Contact {
  readonly userId?: number;
  readonly contactId?: number;
  email: string;
  userName?: string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  image: string;
  created_ts?: Date;
}
