const appName = "Saleor Events";
const appDescription =
  "Web-app that manages events which occur under Saleor domain.";

interface Config {
  appName: string;
  appDescription: string;
}

export const config: Config = {
  appName,
  appDescription,
};
