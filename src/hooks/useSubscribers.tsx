import { getSubscribers } from "@/app/actions/Subscriber/get.subscribers";
import { useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useSubscriberData = () => {
  const [data, setData] = useState<subscribersDataTypes[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useClerk();

  useEffect(() => {
    const GetSubscribers = async () => {
      if (!user?.id) return; // 确保用户已登录

      try {
        const res = await getSubscribers({ newsletterOwnerId: user.id }).then((res:any)=> {
          setData(res);
        });
        
        if (res === null) {
          setError("No subscribers found");
          toast.error("No subscribers found");
        }
      } catch (err) {
        setError("Something went wrong");
        toast.error("Failed to load subscribers");
      } finally {
        setLoading(false);
      }
    };

    GetSubscribers();
  }, [user]);

  return { data, loading, error }; // 返回数据、加载状态和错误信息
};

export default useSubscriberData;