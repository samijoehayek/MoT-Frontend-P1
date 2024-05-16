import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request, response) {

    // Secret Key created from the google dashboard used to identify the account
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // Get the data from the request and putting it in json format
    const postData = await request.json();

    // Get the gRecaptchaToken from the request
    const { gRecaptchaToken } = postData;

    let res;

    // Form data to be sent to the google recaptcha api
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    // Try and catch block sending the data to the google recaptcha api
    try {
        // Send the data to the google recaptcha api and saving response in variable
        res = await axios.post("https://www.google.com/recaptcha/api/siteverify", formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    } catch (error) {
        // If there is an error in the recaptcha verification, return an error message
        return NextResponse.json({ success: false, message: "Error in recaptcha verification" });
    }

    if(res && res.data.success && res.data.score > 0.5) {
        // If the recaptcha verification is successful, return a success message
        return NextResponse.json({ success: true, score: res.data.score });  
    }else {
        // If the recaptcha verification fails, return an error message
        return NextResponse.json({ success: false, message: "Recaptcha verification failed" });
    }
}