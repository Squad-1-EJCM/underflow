import "react-native-gesture-handler";
import Routes from "./src/routes/routes";
import { View } from "react-native";
import FinishPurchase from "./src/pages/FinishPurchase/FinishPurchase";
import PurchaseButtons from "./src/components/PurchaseButtons/PurchaseButtons";
import PurchaseCart from "./src/pages/PurchaseCart/PurchaseCart";
export default function App() {
  return (
    //<Routes/>

    <PurchaseCart />
  );
}
