// TABLE
interface TableTypes {
  sno: string;
  postID: string;
  userID: string;
  username: string;
  phoneNo: number;
  emailAddress: string;
  receivedFrom: string;
  title: string;
  status: string;
  postBody: string;
  date: Date;
  apiKeys: string;
  description: string;
  edit: unknown;
  accessLevel: "SUADMIN" | "MINIADMIN";
}

export interface ApiTableTypes
  extends Pick<
    TableTypes,
    "sno" | "apiKeys" | "title" | "description" | "date" | "status" | "edit"
  > {}

export interface GptTableTypes extends ApiTableTypes {}

export interface PostTableTyped
  extends Pick<
    TableTypes,
    "sno" | "postID" | "receivedFrom" | "postBody" | "date"
  > {}

export interface TableEditTypes {
  EDIT: "UPDATE" | "DELETE";
}

export interface AdminTypes
  extends Pick<
    TableTypes,
    "userID" | "username" | "phoneNo" | "emailAddress" | "accessLevel" | "edit"
  > {}

// forms
interface Forms {
  userID: string;
  password: string | null;
  confirmPassword: string | null;
  oldPassword: string | null;
  phoneNumber: number;
  username: string | null;
  accessLevel: "SUADMIN" | "MINIADMIN";
  rate: boolean;
  apikeys: string | null;
  email: string | null;
}

export interface SignUpFormType
  extends Pick<Forms, "password" | "confirmPassword" | "username"> {}

export interface SignInFormType extends Pick<Forms, "password" | "username"> {}

export interface CreateAdmin
  extends Pick<
    Forms,
    "userID" | "username" | "phoneNumber" | "email" | "accessLevel"
  > {}

export interface AdminLogin
  extends Pick<Forms, "userID" | "username" | "password"> {}

type imgType = HTMLInputElement | string | HTMLImageElement;

type Cards = {
  firstName: string;
  lastName: string;
  img: imgType;
  email: string;
  phoneNo: string;
};

export interface ContactCardType extends Cards {}

export interface NotificationCardType extends Cards {}

export interface dashboardCardType {
  heading: string;
  percentage: number;
  direction: "UP" | "DOWN";
}
