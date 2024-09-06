'use server'

import * as AWS from "aws-sdk"
import * as nodemailer from "nodemailer"

interface Props {
  userEmail:string[];
  subject:string;
  content:string;
}

// MARK: AWS-config
AWS.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY,
  secretAccessKey:process.env.MY_AWS_SECRET_KEY,
  region:'ap-southeast-2'
})

// MARK: AWS-getCred
AWS.config.getCredentials(function(error) {
  if(error) {
    console.log("error:==>",error);
  }
})

const ses = new AWS.SES({ apiVersion:"2010-12/01" })


// MARK: nodemailer

const transporter = nodemailer.createTransport({
  SES: ses,
})

const adminEmail = "countstarss404@gmail.com"

//MARK: sendEmail
const sendEmail = async({ userEmail, subject, content } : Props) => {
  try {
    const response = await transporter.sendMail({
      from:adminEmail,
      to:userEmail,
      subject:subject,
      html:content
    })

    return response
  } catch (error) {
    throw error;
  }
}
//MARK: sendVerificationEmail
export const sendVerificationEmail = async (email: string) => {
  try {
    const params = {
      EmailAddress: email, // 用户订阅时的邮箱
    };

    const result = await ses.verifyEmailIdentity(params).promise();
    console.log("Verification email sent to:", email);
    return result;
  } catch (error) {
    console.log("Error sending verification email:", error);
    throw error;
  }
};


export default sendEmail
