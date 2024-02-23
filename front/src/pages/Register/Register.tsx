import React from "react";
import AuthPage from "../../components/RegisterPages/AuthPage";
import AddressPage from "../../components/RegisterPages/AddressPage";
import { useRegisterContext } from "../../contexts/RegisterContext";
import UserDataPage from "../../components/RegisterPages/UserDataPage";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SuccessPage from "../../components/SuccessPage/SuccessPage";

const Register = () => {
  const { pagination } = useRegisterContext();
  const pages = [
    <AuthPage />,
    <AddressPage />,
    <UserDataPage />,
    <SuccessPage href="Login" text="Conta criada com sucesso!" />,
  ];
  const [progress, setProgress] = React.useState(() => pagination.page / 3);

  React.useEffect(() => {
    setProgress(pagination.page / 3);
    console.log(progress);
  }, [pagination.page]);

  return (
    <>
      {pages[pagination.page]}
      {progress < 1 ? <ProgressBar progress={progress} /> : null}
    </>
  );
};

export default Register;
