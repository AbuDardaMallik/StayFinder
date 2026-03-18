// WrapAsync function to catch errors in async route handlers
module.exports = function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(next);
  };
};

// const wrapAsync = (fn) => {
//   return function (req, res, next) {
//     fn(req, res, next).catch((err) => next(err));
//   };
// };

// module.exports = wrapAsync;
