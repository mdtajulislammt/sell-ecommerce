import useCrazyOffersData from "../../../Hooks/useCrazyOffersData";

const CrazyOffers = () => {
     const [crazyOffers] = useCrazyOffersData()
     console.log(crazyOffers);
     return (
          <div>
               {
                    crazyOffers.map((crazyOffer) => <div key={crazyOffer._id}>
                         <img src={crazyOffer.img} alt="" />
                         <h2>{crazyOffer.title}</h2>
                    </div>)
               }
          </div>
     );
};

export default CrazyOffers;