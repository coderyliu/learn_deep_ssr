// ?nuxt提供支持使用useState的方式支持在跨页面、组件中实现状态共享
// 使用方式：useState<T>(key, () => T): Ref<T>  提供唯一的key或者默认值, 第二个参数是一个函数，返回一个变量，返回的这个变量就是Ref响应式的

// 使用的时候：如果返回一个default函数：以文件名使用
export default () => {
  // return useState(() => 0);
  // 或者
  return useState("counter", () => 0);
};

// 通过这种方式导出的：以导出名使用
export const useInfo = () => {
  return useState("info", () => ({
    name: "coder",
    age: 18
  }));
};

// !注意的是：之所以在composables文件夹中写hooks，是因为：在nuxt中，composables文件夹中的文件，会自动被注册为全局的hooks，所以可以直接在页面中使用
