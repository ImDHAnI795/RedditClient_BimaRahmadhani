const lanesContainer = document.getElementById("lanesContainer");

const addBtn = document.getElementById("addBtn");

const subredditInput = document.getElementById("subredditInput");

let lanes = JSON.parse(localStorage.getItem("reddit-lanes")) || [];

function saveLanes() {
    localStorage.setItem("reddit-lanes", JSON.stringify(lanes));
}

async function fetchSubreddit(subreddit) {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

    if (!response.ok) {
        throw new Error("Subreddit not found");
    }

    return response.json();
}

async function createLane(subreddit) {
    if (lanes.includes(subreddit)) {
        alert("Subreddit already added");

        return;
    }

    const lane = document.createElement("div");

    lane.className = "lane";

    lane.innerHTML = `
<div class="lane-header">
<h3>r/${subreddit}</h3>

<button
class="remove-btn"
data-subreddit="${subreddit}"
>
Remove
</button>
</div>

<div class="posts">

<div class="loading">
Loading...
</div>

</div>
`;

    lanesContainer.appendChild(lane);

    try {
        const data = await fetchSubreddit(subreddit);

        const postsContainer = lane.querySelector(".posts");

        postsContainer.innerHTML = "";

        data.data.children.forEach((item) => {
            const post = item.data;

            postsContainer.innerHTML += `
<div class="post">

<a
href="https://reddit.com${post.permalink}"
target="_blank"
>

<h4>
${post.title}
</h4>

</a>

<div class="post-meta">

u/${post.author}

</div>

<div class="post-stats">

<span>
⬆ ${post.ups}
</span>

<span>
💬 ${post.num_comments}
</span>

</div>

${post.thumbnail && post.thumbnail.startsWith("http")
                    ? `<img
src="${post.thumbnail}"
class="thumbnail"
>`
                    : ""
                }

</div>
`;
        });

        lanes.push(subreddit);

        saveLanes();
    } catch (error) {
        lane.querySelector(".posts").innerHTML = `
<div class="error">
Subreddit not found
</div>
`;
    }
}

addBtn.addEventListener("click", () => {
    const subreddit = subredditInput.value.trim();

    if (!subreddit) return;

    createLane(subreddit);

    subredditInput.value = "";
});

lanesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const subreddit = event.target.dataset.subreddit;

        lanes = lanes.filter((lane) => lane !== subreddit);

        saveLanes();

        event.target.closest(".lane").remove();
    }
});

lanes.forEach((subreddit) => createLane(subreddit));
