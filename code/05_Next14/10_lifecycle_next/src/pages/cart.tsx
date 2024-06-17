import React, { PureComponent } from "react";

export default class Cart extends PureComponent {
  // *类组件中，客户端会按照react中执行生命周期的顺序进行
  // *服务端只会执行constructor和render里面的内容

  constructor(props: any) {
    super(props);
    console.log("constructor");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>cart page</h2>
      </div>
    );
  }
}
