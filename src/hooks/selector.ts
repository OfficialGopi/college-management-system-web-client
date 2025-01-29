import { useSelector } from "react-redux";

const selectorHook = (stateName: string) => () => {
  const state: any = useSelector((state) => state);
  return state[stateName];
};

export const useUserSelector = selectorHook("user");
export const useAdminsListSelector = selectorHook("adminsList");
