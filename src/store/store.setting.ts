import { create } from 'zustand';

interface SettingsState {
  name: string;
  email: string;
  updateSettings: (data: { name: string; email: string }) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  name: 'admin',
  email: 'admin@gmail.com',
  updateSettings: ({ name, email }) => set({ name, email }),
})); 