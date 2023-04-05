import React, { Fragment, useState } from "react";
import { DeleteProduct } from "./../actions/ProductsAction";
import { useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";

function Product_Item({ products }) {
  let dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="px-6 py-4 relative bg-white items-start text-left font-normal rounded-[10px] font-['Poppins'] [box-shadow:0px_0px_0px_1px_rgba(218,_222,_223,_1)_inset] [box-shadow-width:1px]">
        <div className="w-full flex justify-between items-start self-stretch">
          <div className="h-72 gap-2 flex items-start self-stretch">
            <div className="w-12 h-12 rounded-[5px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/64e20be08cf548f99b78c28360752b9573147dd9.webp)_center_/_cover]" />
            <div className="gap-5">
              <div className="gap-6 flex flex-col items-start">
                <div className="flex flex-col items-start">
                  <p className="text-2xl leading-8 text-black m-0">
                    {products.jobtitle}
                  </p>
                  <p className="text-base leading-6 text-black m-0">
                    {products.companyname} - {products.industry}
                  </p>
                  <p className="text-base leading-6 m-0 text-[rgba(100,100,100,1)]">
                    {products.location}
                  </p>
                </div>
                <div className="w-[490px] gap-2 flex flex-col items-start self-stretch text-[rgba(33,36,39,1)] max-h-[200px] overflow-y-auto">
                  <div className="gap-2.5">
                    <p className="text-base leading-6 m-0">
                      {products.remotetype}
                    </p>
                  </div>
                  <div className="gap-2.5">
                    <p className="text-base leading-6 m-0">
                      Experience ({products.expmin} - {products.expmax} years)
                    </p>
                  </div>
                  <div className="gap-2.5">
                    <p className="text-base leading-6 m-0">
                      INR (₹) {products.salarymin} - {products.salarymax} /
                      Month
                    </p>
                  </div>
                  <div className="gap-2.5">
                    <p className="text-base leading-6 m-0">
                      {products.totalemp} employees
                    </p>
                  </div>
                </div>
                <div className="gap-1">
                  <div className="gap-[5px]">
                    <div className="gap-6 flex items-center">
                      <div className="w-[118px]">
                        <div className="px-4 py-2 inline-flex justify-center items-center rounded-md text-white text-left font-medium w-[118px] drop-shadow-lg bg-[rgba(21,151,228,1)] overflow-clip font-['Poppins']">
                          <button>
                            <p className="text-base leading-6 m-0">Apply Now</p>
                          </button>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-white gap-2 inline-flex items-center text-center font-medium w-[147px] overflow-clip rounded-[5px] font-['Poppins'] text-[rgba(21,151,228,1)] [box-shadow:0px_0px_0px_1px_rgba(21,_151,_228,_1)_inset] [box-shadow-width:1px]">
                        <button>
                          <p className="text-base leading-normal m-0">
                            External Apply
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-2 w-[240px]">
            <div className="gap-6 flex items-center">
              <div className=" flex items-center absolute right-[20px] top-[20px]">
                <div className="w-[118px]">
                  <div className="px-4 py-2 inline-flex justify-center items-center rounded-md text-white text-left font-medium w-[100px] drop-shadow-lg bg-green-500 overflow-clip font-['Poppins']">
                    <button className="flex gap-2" onClick={openModal}>
                      <p className="text-base flex leading-6 m-0">Edit</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </button>

                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={closeModal}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 " />
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
                                <div class="h-screen w-screen flex justify-center items-center">
                                  <iframe
                                    className="h-full w-full"
                                    src={`/edit/${products.id}`}
                                    title="edit"
                                  />
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                  </div>
                </div>
                <div className="px-4 py-2 text-white gap-2 inline-flex items-center text-center font-medium overflow-clip rounded-[5px] font-['Poppins'] bg-red-500 [box-shadow-width:1px]">
                  <button
                    className="flex gap-2"
                    onClick={() => dispatch(DeleteProduct(products.id))}
                  >
                    <p className="text-base flex leading-6 m-0">Delete</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_Item;
