import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form' // Tambahkan ini jika menggunakan react-hook-form untuk handleSubmit

const CheckOutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0);
  const { register, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = React.useState(false);
  const currentUser = { email: "user@example.com" }; // Ganti dengan nilai sesungguhnya

  const onSubmit = data => {
    console.log(data);
    // Tambahkan fungsi untuk menangani submit
  };

  return (
    <section>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
            <p className="text-gray-500 mb-2">Total Price: Rp. {totalPrice.toLocaleString("id-ID")}</p>
            <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>
          </div>
          {
            cartItems.length > 0 && (
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("name")}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          disabled
                          defaultValue={currentUser?.email}
                          placeholder="email@domain.com"
                          {...register("email")}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="+123 456 7890"
                          {...register("phone")}
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="address">Address / Street</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("address")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("city")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="country">Country / region</label>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          {...register("country")}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="state">State / province</label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          placeholder="State"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          {...register("state")}
                        />
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register("zipcode")}
                        />
                      </div>

                      <div className="md:col-span-5 mt-3">
                        <div className="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="billing_same"
                            id="billing_same"
                            className="form-checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            {...register("billing_same")}
                          />
                          <label htmlFor="billing_same" className="ml-2">
                            I agree to the <Link className="underline text-blue-600">Terms & Conditions</Link> and <Link className="underline text-blue-600">Shopping Policy</Link>.
                          </label>
                        </div>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <button
                          type="submit"
                          disabled={!isChecked}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Place an Order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
