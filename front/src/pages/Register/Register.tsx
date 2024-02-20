import React from "react";
import AuthPage from "../../components/RegisterPages/AuthPage";
import AddressPage from "../../components/RegisterPages/AddressPage";
import { useRegisterContext } from "../../contexts/RegisterContext";
import UserDataPage from "../../components/RegisterPages/UserDataPage";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Register = () => {
  const { pagination } = useRegisterContext();
  const pages = [<AuthPage />, <AddressPage />, <UserDataPage />];
  const [progress, setProgress] = React.useState(() => pagination.page / 3);

  React.useEffect(() => {
    setProgress(pagination.page / 3);
    console.log(progress);
  }, [pagination.page]);

  return (
    <>
      {pages[pagination.page]}
      <ProgressBar progress={progress} />
    </>
  );
};

export default Register;
