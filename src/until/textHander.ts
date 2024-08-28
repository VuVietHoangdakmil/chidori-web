const Prams = (str: string) => {
  return {
    conver: str.replace(/ /g, "_"),
    unConver: str.replace(/_/g, " "),
  };
};
export { Prams };
