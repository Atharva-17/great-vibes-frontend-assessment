import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editProduct, PostEditProduct } from "./../actions/ProductsAction";

function EditProduct() {
  const [show, setShow] = useState(true);
  const [close, setClose] = useState(false);
  let [data, setData] = useState({
    jobtitle: "",
    companyname: "",
    industry: "",
    location: "",
    remotetype: "",
    expmin: "",
    expmax: "",
    salarymin: "",
    salarymax: "",
    totalemp: "",
    quickapply: true,
    externalapply: true,
  });
  const { id } = useParams();
  let dispatch = useDispatch();
  const productEdit = useSelector((state) => state.EditProductRD);
  useEffect(() => {
    dispatch(editProduct(id));
    setData(productEdit);
  }, [productEdit.jobtitle]);

  function GetValueInputForm(e) {
    const inputData = { ...data };
    inputData[e.target.id] = e.target.value;

    setData(inputData);
  }
  const submitNext = (e) => {
    e.preventDefault();
    setShow(!show) ?? setClose(true);
  };
  const finalsubmit = () => {
    dispatch(PostEditProduct(data));
    setClose(false);
  };

  return (
    <>
      {show ? (
        <form
          onSubmit={submitNext}
          action=""
          className=" text-center m-5 flex items-center justify-center h-screen"
        >
          <div className="bg-white gap-8 inline-flex flex-col items-center p-8 rounded-[10px] font-['Poppins'] text-[rgba(24,32,33,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]">
            <div className="gap-24 flex flex-col items-start">
              <div className="gap-6 flex flex-col items-start w-[513px] overflow-clip">
                <div className="flex justify-between items-center w-[513px]">
                  <p className="text-xl font-normal leading-7 text-left m-0">
                    Create a job
                  </p>
                  <p className="text-base font-medium leading-6 text-right m-0">
                    Step 1
                  </p>
                </div>
                <div className="w-full gap-1 flex flex-col items-start self-stretch">
                  <div className="gap-2 text-left font-['Poppins'] transition-all w-full">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Job title
                      </p>
                      <p className="text-sm leading-5 inline m-0 text-[rgba(216,97,97,1)]">
                        *
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.jobtitle}
                      id="jobtitle"
                      placeholder="ex. UX UI Designer"
                      required
                    />
                  </div>
                </div>

                <div className="w-full gap-1 flex flex-col items-start self-stretch">
                  <div className="gap-2 text-left font-['Poppins'] transition-all w-full">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Comapnay name
                      </p>
                      <p className="text-sm leading-5 inline m-0 text-[rgba(216,97,97,1)]">
                        *
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.companyname}
                      id="companyname"
                      placeholder="ex. Google"
                      required
                    />
                  </div>
                </div>
                <div className="w-full gap-1 flex flex-col items-start self-stretch">
                  <div className="gap-2 text-left font-['Poppins'] transition-all w-full">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Industry
                      </p>
                      <p className="text-sm leading-5 inline m-0 text-[rgba(216,97,97,1)]">
                        *
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.industry}
                      id="industry"
                      placeholder="ex. Information Technology"
                      required
                    />
                  </div>
                </div>

                <div className="w-full gap-6 flex items-end self-stretch">
                  <div className="gap-2 text-left font-['Poppins'] transition-all flex-1">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Location
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.location}
                      id="location"
                      placeholder="ex. Chennai"
                    />
                  </div>

                  <div className="gap-2 text-left font-['Poppins'] transition-all flex-1">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Remote type
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.remotetype}
                      id="remotetype"
                      placeholder="ex. In-office"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center w-[513px]">
                <div className="gap-6 w-[68px]">
                  <div className="px-4 py-2 inline-flex justify-center items-center rounded-md text-white text-left font-medium w-[68px] drop-shadow-lg bg-[rgba(21,151,228,1)] overflow-clip font-['Poppins']">
                    <button>
                      <p className="text-base leading-normal m-0">Next</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : close ? (
        <form
          action=""
          style={{ width: "100%" }}
          className=" text-center m-5 flex items-center justify-center h-screen"
        >
          <div className="bg-white gap-8 inline-flex flex-col items-center p-8 rounded-[10px] font-['Poppins'] text-[rgba(24,32,33,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]">
            <div className="gap-24 flex flex-col items-start">
              <div className="gap-6 flex flex-col items-start w-[513px] overflow-clip">
                <div className="flex justify-between items-center w-[513px]">
                  <p className="text-xl font-normal leading-7 text-left m-0">
                    Create a job
                  </p>
                  <p className="text-base font-medium leading-6 text-right m-0">
                    Step 2
                  </p>
                </div>
                <div className="w-full gap-6 flex items-end self-stretch">
                  <div className="gap-2 text-left font-['Poppins'] transition-all flex-1">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Experience
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.expmin}
                      id="expmin"
                      placeholder="Minimum"
                    />
                  </div>

                  <div className="gap-2 text-left font-['Poppins'] transition-all flex-1">
                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.expmax}
                      id="expmax"
                      placeholder="Maximum"
                    />
                  </div>
                </div>

                <div className="w-full gap-6 flex items-end self-stretch">
                  <div className="gap-2 text-left font-['Poppins'] transition-all flex-1">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Salary
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.salarymin}
                      id="salarymin"
                      placeholder="Minimum"
                    />
                  </div>

                  <div className="gap-2 text-left font-['Poppins'] transition-all flex-1">
                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.salarymax}
                      id="salarymax"
                      placeholder="Maximum"
                    />
                  </div>
                </div>

                <div className="w-full gap-1 flex flex-col items-start self-stretch">
                  <div className="gap-2 text-left font-['Poppins'] transition-all w-full">
                    <div className="leading-none relative">
                      <p className="text-sm leading-5 inline m-0 text-[rgba(33,33,33,1)]">
                        Total Employee
                      </p>
                    </div>

                    <input
                      className="px-3 py-2 w-full bg-white gap-2.5 flex items-start self-stretch font-normal rounded-[5px] text-[rgba(122,122,122,1)] [box-shadow:0px_0px_0px_1px_rgba(230,_230,_230,_1)_inset] [box-shadow-width:1px]"
                      onChange={(e) => GetValueInputForm(e)}
                      value={data.totalemp}
                      id="totalemp"
                      placeholder="ex. 100"
                    />
                  </div>
                </div>

                <div className="w-full gap-6">
                  <div className="flex-1 w-full gap-1 inline-flex flex-col items-start flex-grow text-left font-medium font-['Poppins'] text-[rgba(33,33,33,1)]">
                    <div className="gap-1">
                      <p className="text-sm leading-5 m-0">Apply type</p>
                    </div>
                    <div className="py-2 h-9 gap-5 flex items-center w-full">
                      <div className="transition-all gap-4 inline-flex justify-center items-center text-left font-normal font-['Poppins'] text-[rgba(122,122,122,1)]">
                        <div className="gap-1 flex items-center w-[107px]">
                          <input
                            type="radio"
                            className=""
                            onChange={(e) => GetValueInputForm(e)}
                            value={data.quickapply}
                            id="quickapply"
                          />
                          <p className="text-sm leading-5 m-0">Quick apply</p>
                        </div>
                      </div>

                      <div className="transition-all gap-4 inline-flex justify-center items-center text-left font-normal font-['Poppins'] text-[rgba(122,122,122,1)]  relative">
                        <div className="gap-1 flex items-center w-[123px]">
                          <input
                            type="radio"
                            className=""
                            onChange={(e) => GetValueInputForm(e)}
                            value={data.externalapply}
                            id="externalapply"
                          />
                          <p className="text-sm leading-5 m-0">
                            External apply
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center w-[513px]">
                <div className="gap-6 w-[68px]">
                  <div className="px-4 py-2 inline-flex justify-center items-center rounded-md text-white text-left font-medium w-[68px] drop-shadow-lg bg-[rgba(21,151,228,1)] overflow-clip font-['Poppins']">
                    <NavLink exact to="/">
                      <button
                        className="text-base leading-normal m-0"
                        type="submit"
                        onClick={finalsubmit}
                      >
                        Save
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}

export default EditProduct;
