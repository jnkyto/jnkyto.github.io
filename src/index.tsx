import React from "react";
import { createRoot } from "react-dom/client";
import { IntlProviderWrapper } from "./IntlContext";
import "./styles/Index.css";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <IntlProviderWrapper>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/music"} element={<Music />} />
          <Route path={"/blogs"} element={<Blogs />} />
          <Route path={"/blogs/:slug"} element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </IntlProviderWrapper>,
);
