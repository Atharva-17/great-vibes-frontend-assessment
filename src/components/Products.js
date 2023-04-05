import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./../actions/ProductsAction";
import Product_Item from "./Product_Item";
import AddProduct from "./AddProduct";
import { Dialog, Transition } from "@headlessui/react";

function Products() {
  let dispatch = useDispatch();
  const products = useSelector((state) => state.ProductRD);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col">
      <div>
        <button
          onClick={openModal}
          className=" m-7 px-3 py-2 inline-flex justify-center items-center rounded-md text-white text-left font-medium w-[145px] drop-shadow-lg bg-[rgba(21,151,228,1)] overflow-clip font-['Poppins']"
        >
          <p className="text-base flex gap-1 leading-6 m-0">
            Create Job
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenżdd"
              />
            </svg>
          </p>
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel>
                    <AddProduct />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="items-start text-left font-normal font-['Poppins']">
        <div className="grid grid-cols-2 gap-7 w-full h-full p-7 bg-[rgba(216,216,216,1)] overflow-clip ">
          {products.map((product) => {
            return <Product_Item key={product.id} products={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
