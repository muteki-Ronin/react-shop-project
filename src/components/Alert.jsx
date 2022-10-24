// CORE
import { useEffect, useContext } from "react";
// CONTEXT
import { ShopContext } from "../context";

function Alert() {
  const { alertName = "", closeAlert } = useContext(ShopContext);
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [alertName]);
  return (
    <div id="toast-container">
      <div className="toast">{alertName} add to basket!</div>
    </div>
  );
}

export default Alert;
