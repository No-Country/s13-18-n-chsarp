'use client';

import { useState, useEffect } from 'react';
import type { AxiosResponse } from 'axios';

import type { AxiosCall } from '@/models';

interface FetchAndLoadProps {
  loading: boolean;
  callEndpoint: (axiosCall: AxiosCall<any>) => Promise<AxiosResponse<any>>;
}

// Custom Hook para realizar peticiones http.
export const useFetchAndLoad = (): FetchAndLoadProps => {
  // Estado para el loader de una petición
  const [loading, setLoading] = useState<boolean>(false);

  // Referencia para almacenar un controlador para poder cancelar peticiones http.
  let controller: AbortController;

  // Petición http con axios.
  const callEndpoint = async (
    axiosCall: AxiosCall<any>
  ): Promise<AxiosResponse<any>> => {
    // Verificamos si existe controlador en la petición para almacenarlo
    // en nuestra variable previamente declarada.
    if (axiosCall.controller) controller = axiosCall.controller;

    // Cambiamos el estado del Loader.
    setLoading(true);

    // Referencia para almacenar la respuesta de nuestra petición http.
    let result: AxiosResponse<any> | {} = {};

    try {
      // Hacemos la petición http para almacenar la respuesta en nuesta
      // variable previamente declarada.
      result = await axiosCall.call;
    } catch (err: any) {
      // Cambiamos el estado del Loader.
      setLoading(false);

      // Devolvemos cualquier error que haya ocurrido con nuestra petición.
      throw err;
    }

    // Cambiamos el estado del Loader.
    setLoading(false);

    // Devolvemos la respuesta exitosa a nuestra petición http.
    return result as AxiosResponse<any>;
  };

  // Función para cancelar la petición http en curso.
  const cancelEnpoint = (): void => {
    // Cambiamos el estado del Loader.
    setLoading(false);

    // Cancelamos la petición http, si existe una referencia al controlador
    // de la petición http.
    controller && controller.abort();
  };

  // Efecto para cancelar la petición http en caso de que se destruya el componente
  // el cual este realizando una petición http con este Custom Hook.
  useEffect(() => {
    return () => {
      // Cancelamos la petición http en curso.
      cancelEnpoint();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Devolvemos el Loader de la petición http y la función de esa petición http.
  return { loading, callEndpoint };
};
