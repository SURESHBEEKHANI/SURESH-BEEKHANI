// Test the chat function directly
async function testChatFunction() {
    console.log('Testing Netlify chat function...\n');

    try {
        const response = await fetch('http://localhost:8888/.netlify/functions/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Hello, what services do you offer?'
            })
        });

        console.log('Status:', response.status);
        console.log('Status Text:', response.statusText);

        const data = await response.json();
        console.log('\nResponse Data:');
        console.log(JSON.stringify(data, null, 2));

        if (data.response) {
            console.log('\n✅ Success! Bot Response:');
            console.log(data.response);
        } else if (data.error) {
            console.log('\n❌ Error:', data.error);
            console.log('Message:', data.message);
        }

    } catch (error) {
        console.error('\n❌ Request failed:', error.message);
        console.error('\nMake sure netlify dev is running!');
    }
}

testChatFunction();
