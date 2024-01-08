import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCrazyOffersData = () => {
     const axiosPublic = useAxiosPublic();

     const {data: crazyOffers=[], isPending:loading,refetch} = useQuery({
          queryKey:['crazyOffers'],
          queryFn:async()=>{
               const res = await axiosPublic.get('/crazyOffers');
               return res.data
          }
         })
     return [crazyOffers,loading,refetch]
};

export default useCrazyOffersData;