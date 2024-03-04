export const AppRoutes = {
  HOME: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  CHAT: '/chat',
  CHAT_ID: (chatId: number) => `${AppRoutes.CHAT}/${chatId}`,
};
