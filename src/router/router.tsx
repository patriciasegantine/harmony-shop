import { Route, Routes } from "react-router-dom";
import { RouterEnum } from "../enum/router-enum.ts";
import { MainContainer } from "./router.styles.ts";
import { Home } from "../pages/home/home.tsx";
import { About } from "../pages/about/about.tsx";
import { Courses } from "../pages/courses/courses.tsx";
import { Shop } from "../pages/shop/shop.tsx";
import { Contact } from "../pages/contact/contact.tsx";

export const Router = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path={RouterEnum.home} element={<Home/>}/>
        <Route path={RouterEnum.about} element={<About/>}/>
        <Route path={RouterEnum.courses} element={<Courses/>}/>
        <Route path={RouterEnum.shop} element={<Shop/>}/>
        <Route path={RouterEnum.contact} element={<Contact/>}/>
      </Routes>
    </MainContainer>
  );
};
