// store.ts
import create from 'zustand';

interface ListStore {
  emails: any[];
  setEmails: (emails: any[]) => void;
}

export const useListStore = create<ListStore>(set => ({
  emails: [],
  setEmails: (emails) => set({ emails }),
}));