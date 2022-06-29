const EmailTemplate = (enteredData) => `
        <!DOCTYPE html>
        <head><title>New Website Contact Submission</title></head>
        <body style="margin: 0; padding: 0; display: grid; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <h1>New ${enteredData.formType} Submission</h1>
                <ul style="list-style-type: none;">
                    ${Object.entries(enteredData).map(
						(data) =>
							`<li><strong>${data[0]}</strong><br/><span>${data[1]}</span></li>`
					)}
                </ul>
            </div>
        </body>
    `;
module.exports = { EmailTemplate };
