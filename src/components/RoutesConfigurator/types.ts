export type RouteConfig = Record<
  string,
  {
    Component: JSX.Element;
    title?: string;
  }
>;
