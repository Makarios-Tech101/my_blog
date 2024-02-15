document.getElementById('blogForm').addEventListener('submit', postBlog);

async function postBlog(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const userId = document.getElementById('userId').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                title: title,
                body: body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data = await response.json();
        console.log(data);
        // Display the response
        document.getElementById('blogPost').innerText = `New blog post created with id: ${data.id}`;
    } catch (error) {
        console.error('Error:', error);
    }
}
