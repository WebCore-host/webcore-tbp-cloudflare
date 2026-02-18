// Replace these with your actual Contentful credentials
const SPACE_ID = 'fcb03496p9b3';
const ACCESS_TOKEN = Contentful_Delivery_API;

async function fetchBlogPosts() {
    try {
        const response = await fetch(
            `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?content_type=blogPost&access_token=${ACCESS_TOKEN}&order=-fields.publishedDate`
        );
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

async function displayBlogs() {
    const posts = await fetchBlogPosts();
    const container = document.getElementById('blog-container');
    
    if (posts.length === 0) {
        container.innerHTML = '<p>No blog posts found.</p>';
        return;
    }
    
    container.innerHTML = ''; // Clear loading message
    
    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.innerHTML = `
            <h2>${post.fields.title}</h2>
            <p class="date">${formatDate(post.fields.publishedDate)}</p>
            <div class="content">${post.fields.content}</div>
            <hr>
        `;
        container.appendChild(article);
    });
}

// Load blogs when page loads
displayBlogs();
