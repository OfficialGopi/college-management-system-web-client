import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import Router from "./routes/routes";
import SuspenseLoader from "./components/loader/suspense.loader";
import store from "./toolkit/store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Suspense fallback={<SuspenseLoader />}>
      <Router />
    </Suspense>
  </Provider>
);
