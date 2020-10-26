const AWS = require('aws-sdk');

const snsAccessKey = process.env.SNS_ACCESS_KEY_ID;
const snsAccessSecret = process.env.SNS_SECRET_ACCESS_KEY;
const snsTopic = process.env.SNS_TOPIC_ARN;

module.exports.handler = (event, context, callback) => {

    const rawData = JSON.parse(event.body);
    const formData = rawData.payload;
    const email = formData.email;
    const company = formData.company;
    const ip = formData.data.ip;
    console.log(formData);
    let errorMessage = null;

    if (!formData) {
        errorMessage = "No form data supplied";
        console.log(errorMessage);
        callback(errorMessage);
    }

    if (!email) {
        errorMessage = "No email supplied";
        console.log(errorMessage);
        callback(errorMessage);
    }

    if (!company) {
        errorMessage = "No company supplied";
        console.log(errorMessage);
        callback(errorMessage);
    }

    const data = {
        email: email,
        company: company,
        ip: ip
    };

    const subscriber = JSON.stringify(data);
    console.log("Sending data to SNS", subscriber);

    // Setup AWS SNS connection
    const sns = new AWS.SNS({apiVersion: '2010-03-31', accessKeyId: snsAccessKey, secretAccessKey: snsAccessSecret});

    sns.publish({
        Message: subscriber,
        TopicArn: snsTopic
    }, (err, data) => {
        if (err) {
            console.log("Error from SNS", err);
            callback(err, null);
        } else {
            console.log("Added to SNS");
            console.log(data);
            callback(null, {
                statusCode: 201,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                },
                body: JSON.stringify({
                    status: "Signup processed"
                })
            })
        }
    });    
};
