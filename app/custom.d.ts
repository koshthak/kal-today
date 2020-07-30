/* eslint-disable no-useless-escape */
declare module '\*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '\*.jpg' {
  const content: string;
  export default content;
}

declare module '\*.png' {
  const content: string;
  export default content;
}

declare module '\*.scss' {
  const content: {
    readonly [key: string]: string;
  };
  export default content;
}
