import { Fragment } from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
  const error = useRouteError();
  let title = "An error has occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page!";
  }

  return (
    <Fragment>
      <MainNavigation />

      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
}
