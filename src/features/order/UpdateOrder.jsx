import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../service/apiRestaurant";
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>{" "}
    </fetcher.Form>
  );
}
export async function action({ request, params }) {
  const data = { priority: true };
  //   console.log(params); it's thw URL params
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
