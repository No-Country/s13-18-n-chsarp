'use client';

import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import '@livekit/components-styles';
import type { FC, JSX } from 'react';

import { useMediaRoom } from '../hooks';

/**
 * Model for Media Room component.
 */
interface MediaRoomProps {
  chatId: string;
  video: boolean;
  audio: boolean;
  params: {
    channelId: string;
  };
}

/**
 * Media channels component.
 *
 * @param { MediaRoomProps } param0 - Media channels props.
 *
 * @returns { JSX.Element } Media channels component.
 */
export const MediaRoom: FC<MediaRoomProps> = ({
  chatId,
  video,
  audio,
}: MediaRoomProps): JSX.Element => {
  // State of the token.
  const { token, redirectToHome } = useMediaRoom({ chatId });

  // If the token does not exist, return a payload component.
  if (!token) {
    return <h1> Cargando </h1>;
  }

  return (
    <LiveKitRoom
      data-lk-theme="default"
      connect={true}
      token={token}
      video={video}
      audio={audio}
      onDisconnected={redirectToHome}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      style={{ height: '100dvh' }}
    >
      <VideoConference />
    </LiveKitRoom>
  );
};
