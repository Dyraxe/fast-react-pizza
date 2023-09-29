import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "../menu/MenuItem";

function Menu() {
  const data = useLoaderData();
  return (
    <h1>
      <ul className="divide-y divide-stone-200 px-2">
        {data.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </h1>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
