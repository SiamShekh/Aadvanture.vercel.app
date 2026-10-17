import Cta from "../../Components/Cta";

const Inspaire = () => {
  return (
    <section className="flex min-h-[100svh] items-center justify-center px-6 pb-16 pt-24 text-center">
      <div className="max-w-xl">
        <h1 className="font-Tektur text-3xl font-bold text-white sm:text-5xl">Get inspire</h1>
        <p className="mt-4 font-Genos text-lg text-[#DBFFD5] sm:text-2xl">Page is under maintenance</p>
        <div className="mt-8 flex justify-center">
          <Cta to="/">Back to Home</Cta>
        </div>
      </div>
    </section>
  );
};

export default Inspaire;
