export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL || '';
export const API_PREFIX = '/api';

export const ApiRoutes = {
  livekitApi: (id: string, name: string): string =>
    `/api/livekit?room=${id}&username=${name}`,
};

export enum ApiErrors {
  ROOM_MISSING = 'Missing "room" query parameter',
  USERNAME_MISSING = 'Missing "username" query parameter',
  SERVER_MISCONFIGURED = 'Server misconfigured',
}
