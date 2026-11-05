import { environment } from "../../../environments/environment";

const API_URL = environment.apiUrl;

export const API_ENDPOINTS = {
    identity: `${API_URL}Identity`,
} as const;
