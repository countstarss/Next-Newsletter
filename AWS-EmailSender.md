1. 安装AWS-sdk
`yarn add aws-sdk nodemailer`

2. /utils/email.sender.ts

3. 在AWS IAM 创建一个新user，赋予完全访问SES的权限，把access_key & secret_key 粘贴到.env

4. 进入SES服务