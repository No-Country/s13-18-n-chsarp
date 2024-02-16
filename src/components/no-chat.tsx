import Image from 'next/image';

export const NoChat = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h1 className="text-white font-medium text-5xl">¡Hola!</h1>
        <h2 className="text-white font-medium text-2xl mt-3">
          Por el momento, aún no has creado canales
        </h2>
        <Image
          src="/images/no-chat.svg"
          alt="no chat image"
          width={911}
          height={421}
          className="mt-12"
        ></Image>
      </div>
    </div>
  );
};
