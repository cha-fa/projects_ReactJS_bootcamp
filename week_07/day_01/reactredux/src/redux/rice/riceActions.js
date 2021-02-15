import { BUY_RICE, EAT_RICE } from "./riceTypes";

export const buyRice = () => {
  return {
    type: BUY_RICE,
  };
};

export const eatRice = () => {
  return {
    type: EAT_RICE,
  };
};
