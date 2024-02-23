import { User, useUserContext } from "../contexts/UserContext";

function authenticate(
  user: User | null,
  successCallback: VoidFunction,
  deniedCallback: VoidFunction
) {
  if (user && user.id) {
    successCallback();
  } else {
    deniedCallback();
  }
}

export default authenticate;
