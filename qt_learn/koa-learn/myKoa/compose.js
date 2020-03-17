module.exports = middleware => {
  return context => {
    return dispatch(0);
    function dispatch(i) {
      let fn = middleware[i];
      if (!fn) return Promise.resolve();
      // fn = async () => {};  =>
      return fn(context, () => {
        return dispatch(i + 1);
      });
      // return Promise.resolve(fn({}, () => {
      //   return dispatch(i + 1);
      // }));
    }
  };
};
