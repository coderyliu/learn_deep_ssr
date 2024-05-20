export default defineEventHandler((event) => {
  // event事件最重要的参数：node是一个对象，可以解构出{ req, res } 相当于express的req, res
  const { node } = event;
  const { req, res } = node;
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  return {
    code: 200,
    data: {
      token: "123456"
    }
  };
});
