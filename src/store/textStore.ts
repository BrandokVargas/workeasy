import {create} from 'zustand';

interface textState{
  textStart: boolean;
  textCenter: boolean;
  textEnd: boolean;
  setStartTextStore: (value:boolean) => void
  setCenterTextStore: (value:boolean) => void
  setEndTextStore: (value:boolean) => void
}

const useTextStore = create<textState>((set) => ({
  textStart: false,
  textCenter: false,
  textEnd: false,

  setStartTextStore: (value: boolean) => set({ textStart: value }), 
  setCenterTextStore: (value: boolean) => set({ textCenter: value }), 
  setEndTextStore: (value: boolean) => set({ textEnd: value }),

}));

export default useTextStore; 

