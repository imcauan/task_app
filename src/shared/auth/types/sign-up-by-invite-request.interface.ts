import { SignUpRequest } from "./sign-up-request.interface";

export interface SignUpByInviteRequest extends SignUpRequest {
  workspaceId?: string;
}
