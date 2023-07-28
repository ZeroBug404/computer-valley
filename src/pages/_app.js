import store from "@/redux/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
