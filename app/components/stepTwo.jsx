export function Card2({ onclick, Back }) {
    return (
      <>
        <div className="w-[480px] h-[655px] bg-white rounded-[8px]">
          <div className="ml-[30px] mt-[30px]">
            <div className="w-[400px]  ">
              <img src="/Main 1.svg" width={60} height={60}></img>
              <h2 className="text-[26px] font-bold w-[150px] text-black">Join Us! 😎</h2>
              <p className="text-[#8E8E8E] text-[18px]">
                Please provide all current information accurately.
              </p>
            </div>
            <div>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-8 font-bold">
                Email *
              </p>
              <input
                className="w-[410px] h-11 border-solid border-[#CBD5E1] border-[1px] rounded-md  pl-2"
                placeholder="Email"
              ></input>
              <br></br>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold">
                Phone Number *
              </p>
              <input
                className="w-[410px] h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
                placeholder="Phone Number"
              ></input>
              <br></br>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
                Password *
              </p>
              <input
                className="w-[410px]  h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
                placeholder="Password"
              ></input>
              <br></br>
              <p className="size-[14px] text-[#334155] w-[100px] h-7 mt-6 font-bold ">
                Confirm *
              </p>
              <input
                className="w-[410px]  h-11  border-[#CBD5E1] border-[1px] rounded-md pl-2"
                placeholder="Repeat Your Password"
              ></input>
              <div className="flex justify-center  gap-3 mt-[40px]">
                <button
                  onClick={Back}
                  className="w-[128px] h-11 bg-[#CBD5E1 flex justify-center items-center border border-solid border-[#CBD5E1] rounded-lg "
                >
                  Back
                </button>
                <button
                  className="w-[280px] h-11 bg-[#D6D8DB] flex justify-center items-center rounded-md "
                  onClick={onclick}
                >
                  Continue 2/3{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }