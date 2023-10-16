// import {
//   ReactNode,
//   createContext,
//   useContext,
//   useState,
//   Dispatch,
//   SetStateAction,
// } from 'react';

// type InputContextType = {
//   state: number;
//   setState: Dispatch<SetStateAction<number>>;
// };

// const InputContext = createContext<InputContextType | undefined>(undefined);

// interface ProviderProps {
//   children: ReactNode;
// }

// export const InputProvider = ({ children }: ProviderProps) => {
//   const [state, setState] = useState<number>(0);
//   const contextValue = { state, setState };

//   return (
//     <InputContext.Provider value={contextValue}>
//       {children}
//     </InputContext.Provider>
//   );
// };

// export const useInputContext = () => {
//   const context = useContext(InputContext);
//   if (context === undefined) {
//     throw new Error('useInputContext must be used within a InputProvider');
//   }
//   return context;
// };
