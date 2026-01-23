import HomeBanner from "../assets/home-banner-image.png"
export default function Main() {
  return (
    <div>
      <main className=" ml-20 mr-10">
        <div className="flex items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-700 p-4 mr-10">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <h4 className="text-zinc-600 font-semibold p-4 mr-10">
              Healthy switcher chefs do all the prep work, like peedinf,
              chopping & marinating, so you can cook a fresh food.
            </h4>
            <button className="bg-amber-500 rounded-full p-4 text-white font-bold">
              Order Now <span className="">&rarr;</span>
            </button>
          </div>
          <div className="">
            <img src={HomeBanner} />
          </div>
        </div>
        {/* <section className="bg-[url('./assets/about-background.png')]"> */}
        <section>
            <div>
                <img />
                <div>
                    <h5 className="text-orange-500">About</h5>
                    <h1 className="font-bold text-gray-800">Food Is An Important Part Of A Balanced Diet</h1>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum voluptas cumque fugiat at non dolores facere obcaecati suscipit itaque, voluptate perspiciatis quidem voluptatum nihil minima laborum pariatur accusantium cupiditate.</h6>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
