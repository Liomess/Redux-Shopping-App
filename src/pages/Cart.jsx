import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  // Destructuring
  const {cart} = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])


  return (

    <div>

      {
        cart.length > 0  ? 
        (
          <div className="flex max-w-6xl mx-auto justify-between p-2 mt-4 mb-4">


            <div className="flex flex-col w-2/3 p-2 gap-y-5">

              {
                cart.map( (item) => {
                  return <CartItem key={item.id} item={item}/>
                } )
              }

            </div>


            <div className="flex flex-col justify-between">

              <div className="flex flex-col">

                <div className="text-green-600 uppercase font-semibold">Your Cart</div>

                <div className="text-green-600 uppercase font-bold text-3xl">Summary</div>

                <p className="mt-5">

                  <span className="font-semibold">Total Items: {cart.length}</span>
                </p>

              </div>


              <div>

                <p className="font-semibold">

                  Total Amount: <span className="font-bold text-xl">${totalAmount}</span>

                </p>

                <button className="bg-green-600  text-slate-200 text-center mt-4 uppercase font-semibold 
                py-2 px-4 rounded-md hover:border-2 hover:bg-slate-200 hover:text-green-600 transition 
                duration-300 ease-in hover:border-green-600 w-full">
                  CheckOut Now
                </button>

              </div>

            </div>


          </div>
        ) : 

        (
          <div className="min-h-[80vh] w-full flex flex-col gap-y-5 justify-center items-center">

            <h1 className="text-center font-bold text-3xl">Cart Empty</h1>

            <Link to={"/"}>

              <button className="bg-green-600  text-slate-200 text-center mt-4 uppercase font-semibold 
              py-2 px-4 rounded-md hover:border-2 hover:bg-slate-200 hover:text-green-600 transition 
              duration-300 ease-in hover:border-green-600">
                Shop Now
              </button>

            </Link>

          </div>
        )

      }

    </div>

  );
};

export default Cart;
