/** Funtion to send SMS to phone number to persons */
exports.sendSMS = async (phone) => {
    let code = Math.random(10);
    console.log(`Sendig SMS with ${code} to phone number ${phone} `);
}