import { prisma } from "@/lib/db";

interface MonthData {
  month: string;
  count: number;
}


export async function generateAnalyticsData(): Promise<{ last6Months: MonthData[] }> {
  const last6Months: MonthData[] = [];
  const currentDate = new Date();

  try {
    // 循环生成过去7个月的数据
    for (let i = 5; i >= 0; i--) {
      // 计算结束日期，为当前月份减去i个月
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      // 计算起始日期，为结束日期的前一个月
      const startDate = new Date(endDate.getFullYear(), endDate.getMonth() - 1, 1);

      // 格式化月份和年份
      const monthYear = endDate.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });

      try {
        // 使用 Prisma 查询该月份的记录数量
        const count = await prisma.subscriber.count({
          where: {
            createdAt: {
              gte: startDate,
              lt: endDate,
            },
          },
        });

        // 将该月份的数据推入数组
        last6Months.push({ month: monthYear, count });
      } catch (queryError) {
        // 如果查询失败，可以根据需求设置默认值
        last6Months.push({ month: monthYear, count: 0 });
      }
    }

    return { last6Months };

  } catch (error) {
    // 捕获整个数据生成过程中的错误
    throw new Error("Failed to generate analytics data.");
  }
}