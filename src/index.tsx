import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { IntlProviderWrapper } from "./IntlContext";
import "./styles/Index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./pages/Home"));
const Music = lazy(() => import("./pages/Music"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <IntlProviderWrapper>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<App />}>
              <Route path={"/"} element={<Home />} />
              <Route path={"/music"} element={<Music />} />
              <Route path={"/blogs"} element={<Blogs />} />
              <Route path={"/blogs/:slug"} element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </IntlProviderWrapper>,
);
