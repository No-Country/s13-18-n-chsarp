'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useUserContext } from '@/hooks';
import { ApiRoutes, AppRoutes } from '@/models';

interface UseMediaRoomProps {
  chatId: string;
}

export const useMediaRoom = ({ chatId }: UseMediaRoomProps) => {
  // Authenticated user information.
  const { user } = useUserContext((state) => state);

  /**
   * App router.
   */
  const router = useRouter();

  // State to store the token.
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    // If there is no first or last name in the user information, exit the function.
    if (!user?.user.name) return;

    (async () => {
      try {
        /**
         * Request to get livekit api information.
         */
        const res = await fetch(
          ApiRoutes.livekitApi(chatId, user?.user.name as string)
        );

        /**
         * Transform the response to json.
         */
        const data = await res.json();

        // Store the token in the state.
        setToken(data.token);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user?.user.name, chatId]);

  /**
   * Function to redirect to general server chat.
   *
   * @returns { void } Redirection to general chat.
   */
  const redirectToHome = (): void => {
    return router.push(AppRoutes.CHANNEL);
  };

  return { token, redirectToHome };
};
