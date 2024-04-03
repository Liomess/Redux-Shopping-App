
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {

    dispatch(remove(item.id));
    toast.error("Item Removed");

  }

  return (

      <div className="flex justify-center items-center gap-x-8 py-4 h-[35vh] border-b-2 border-black">

        <div className="h-full w-2/3">

          <img src={item.image} className="h-full w-full"/>

        </div>

        <div className="flex flex-col gap-y-5 p-2">

          <h1 className="font-semibold">{item.title}</h1>

          <h1 className="text-sm">{item.description.split(" ").slice(0,25).join(" ") + "..."}</h1>


          <div className="flex justify-between">

            <p className="text-green-600 font-semibold">${item.price}</p>

            <div
            className="flex justify-center items-center h-[30px] w-[30px] bg-red-400 
            rounded-full cursor-pointer"
            onClick={removeFromCart}>

              <FcDeleteDatabase/>
              
            </div>

          </div>

        </div>


      </div>

  );
};

export default CartItem;
