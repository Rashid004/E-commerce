/** @format */

import PageNav from "./PageNav";

function Home() {
  return (
    <>
      <PageNav />
      <div className="flex items-center justify-between  text-black text-sm">
        <div className="bg-[url('/images/slider-bg.jpg')] w-full h-screen">
          <div className="flex items-start justify-center flex-col">
            <h1 className="">
              <span className="text-[52px] block mb-6">Sale 20% Off</span>
              <span className="text-[52px] block ">On Everything</span>
            </h1>
            <p>
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
            </p>
          </div>
          <button>Shop Now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
