'use client';

import { createContext } from 'react';
import type { StoreApi } from 'zustand';

import type { UserStore } from '@/models';

export const UserContext = createContext<StoreApi<UserStore> | null>(null);
