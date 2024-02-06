import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
// import {  useNavigation } from "react-router-dom";

export default function RootLayout() {
  // const navigation = useNavigation();

  return (
    <Fragment>
      <MainNavigation />

      <main>
        {/* {navigation.state === "loading" && <p className="show">Loading...</p>} */}
        <Outlet />
      </main>
    </Fragment>
  );
}
