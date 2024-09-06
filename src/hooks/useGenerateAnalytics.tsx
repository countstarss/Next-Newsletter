import { generateAnalyticsData } from '@/utils/analytics'
import { useEffect, useState } from 'react'

type Props = {}

const useGenerateAnalytics = () => {
  const [subscribersData,setSubscribeData] = useState<any>([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    GenerateAnalyticsData()
  },[])

  const GenerateAnalyticsData = async () => {
    try {
      await generateAnalyticsData().then((res:any) => {
        setSubscribeData(res)
        setLoading(false)
      })
    } catch (error) {
      console.log("error:=>",error);
    }
  }

  return { subscribersData, loading }
}

export default useGenerateAnalytics