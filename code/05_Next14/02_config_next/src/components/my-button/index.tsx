import React, { memo } from 'react'

// eslint-disable-next-line react/display-name
const MyButton: React.FC = memo(() => {
  // 1 .env环境变量的优先级：
  // process.env > .local.development > .env.local > .env.development | .env.production > .env
  // 2 .env.*的文件会被注入到process.env环境变量中(dotenv库)
  // 3 .env.local通常会放敏感信息，不要放到源代码仓库中
  // 4 .env.development和.env.production是可选的，如果没有，则使用.env文件 可以上传到源代码仓库中
  // 5 如果要泄露给浏览器，需要以NEXT_PUBLIC_*开头，其余的只能在服务端使用
  // 6 环境变量中还可以使用变量 ${VARIABLE}

  if (typeof window === 'undefined'){
    console.log(process.env.HOST) // 0.0.0.0
    console.log(process.env.DEBUG)
  } else {
    console.log(process.env.NEXT_PUBLIC_API_URL)
  }

  return (
    <div>
      MyButton
    </div>
  )
})

export default MyButton