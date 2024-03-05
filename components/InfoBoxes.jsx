import InfoBox from "./InfoBox";
const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Property Owners"
            textColor="text-black"
            btnInfo={{ link: "/", text: "search" , background:"bg-black"}}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
          <InfoBox
            heading="For Renters"
            textColor="text-black"
            backgroundColor="bg-gray-100"
            btnInfo={{ link: "/", text: "Browse properties", background:"bg-blue-500" }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
