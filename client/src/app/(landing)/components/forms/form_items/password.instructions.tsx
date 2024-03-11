import type { FC, ReactElement } from 'react';

export const PasswordInstructions: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center sm:justify-items-start">
      <div className="flex items-center gap-x-2">
        <div className="w-2 h-2 rounded-full bg-[#5D8966]" />
        <p className="text-xs">Usa 8 o más carácteres</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-2 h-2 rounded-full bg-[#5D8966]" />
        <p className="text-xs">Usa 1 o más mayúsculas</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-2 h-2 rounded-full bg-[#5D8966]" />
        <p className="text-xs">Usa 1 o más minúsculas</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-2 h-2 rounded-full bg-[#5D8966]" />
        <p className="text-xs">Usa 1 o más carácteres especiales</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-2 h-2 rounded-full bg-[#5D8966]" />
        <p className="text-xs">Usa 1 o más números</p>
      </div>
    </div>
  );
};
