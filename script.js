function addPost() {

  const name = document.getElementById("studentName").value;
  const content = document.getElementById("postContent").value;
  const imageInput = document.getElementById("imageInput");

  if(name === "" || content === "") {
    alert("이름과 내용을 입력하세요.");
    return;
  }

  const posts = document.getElementById("posts");

  const post = document.createElement("div");
  post.className = "post";

  const now = new Date().toLocaleString();

  if(imageInput.files[0]) {

    const reader = new FileReader();

    reader.onload = function(e) {

      post.innerHTML = `
        <h3>${name}</h3>
        <small>${now}</small>
        <p>${content}</p>
        <img src="${e.target.result}">
      `;

      posts.prepend(post);
    };

    reader.readAsDataURL(imageInput.files[0]);

  } else {

    post.innerHTML = `
      <h3>${name}</h3>
      <small>${now}</small>
      <p>${content}</p>
    `;

    posts.prepend(post);
  }

  document.getElementById("studentName").value = "";
  document.getElementById("postContent").value = "";
  document.getElementById("imageInput").value = "";
}
