export const AppRoutes = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  ONBOARDING: '/onboarding',
  CHANNEL: '/channel/home',
  CHANNEL_ID: (channelId: number) => `/channel/${channelId}`,
  CHAT_ID: (channelId: number, chatId: number) =>
    `/channel/${channelId}/chat/${chatId}`,
  CALL: (channelId: number, chatId: number) =>
    `/channel/${channelId}/chat/${chatId}?video=true`,
};
