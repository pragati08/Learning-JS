//Do not alter the starter code.
function main() {
  //Create your class "User" here with all the properties and methods
  class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.posts = [];
    }

    get getName() {
      return this.name;
    }

    get getEmail() {
      return this.email;
    }

    get getPassword() {
      return this.password;
    }

    set setName(newName) {
      this.name = newName;
    }

    set setEmail(newEmail) {
      this.email = newEmail;
    }

    set setPassword(newPassword) {
      this.password = newPassword;
    }

    addPost(postArr) {
      this.posts.push(postArr);
    }

    displayPosts(postArr, t1, t2) {
      console.log(`
            Posts by ${postArr[0].name} :
            - ${t1}
            - ${t2}
            `);
    }
  }

  class Post extends User {
    #title;
    #content;
    #date;
    #likeCount;
    constructor(name, email, password, title, content, date, posts) {
      super(name, email, password, posts);
      this.#title = title;
      this.#content = content;
      this.#date = date;
      this.#likeCount = 0;
    }

    get getTitle() {
      return this.#title;
    }

    get getContent() {
      return this.#content;
    }

    get getDate() {
      return this.#date;
    }

    set setLikeCount(count) {
      this.#likeCount = count;
    }

    addLike() {
      return this.#likeCount++;
    }

    displayDetails() {
      console.log(`
          Owner: ${this.name}
          Title: ${this.#title}
          Content: ${this.#content}
          Date: ${this.#date}
          Likes: ${this.#likeCount}
          `);
    }
  }

  //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01"
  );
  const post2 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02"
  );
  user1.addPost(post1);
  user1.addPost(post2);

  post1.addLike();

  let pt1 = post1.getTitle;
  let pt2 = post2.getTitle;

  let postTitleArr = [post1, post2];
  user1.displayPosts(postTitleArr, pt1, pt2);
  // Output:
  // Posts by John:
  // - My first post
  // - My second post

  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2

  return { User, Post };
}
main();
