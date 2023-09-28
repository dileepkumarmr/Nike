import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex items-center justify-between gap-10 max-container max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl font-bold leading-[68px] lg:max-w-md font-palanquin">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="flex items-center max-sm:flex-col lg:max-w-[40%] w-full gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Subscribe" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button
            label="Sign Up"
            // fullwidth={}
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
