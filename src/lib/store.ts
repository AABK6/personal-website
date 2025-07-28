import { create } from 'zustand';

type Scene = 'big-bang' | 'population' | null;

interface AppState {
  currentScene: Scene;
  isLoading: boolean;
  setCurrentScene: (scene: Scene) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  currentScene: null,
  isLoading: true,
  setCurrentScene: (scene) => set({ currentScene: scene }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
