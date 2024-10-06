This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## 首先目录结构有所不同(每个commit更新)

![1723296191003](image/README/1723296191003.png)

## 1. Full landing page design

- **types.d.ts**能够**全局**声明类型，不需要引入，直接就可以使用
- 

## timeago.js

- 把createdAt时间格式化成多长时间之前
- 使用：

```ts
import { format } form "timeago.js"

data?.forEach((i:subscribersDataTypes) => {
  rows.push({
    id:i.id,
    email: i.email,
    createdAt: format(i.createdAt),
    status: i?.status,
  })
});
```



Redeploy
