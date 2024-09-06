import SubscribersData from "./_components/SubscribersData";

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-[1200px] p-5 h-screen overflow-hidden mx-[300px]">
      <h1 className="text-2xl font-medium text-white">
        Subscribers
      </h1>
      <p className="pt-1 text-lg">View and manage your subscribers</p>
      <SubscribersData />
    </div>
  )
}

export default page;