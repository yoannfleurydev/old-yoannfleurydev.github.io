import * as fs from "fs";
import * as matter from "gray-matter";

class Metadata {
  posts: Array<matter.GrayMatterFile<string>> = [];
}

const postsDir = "public/posts/";
const metadataJson = `${postsDir}metadata.json`;
const metadata = new Metadata();

// For all files in the posts directory
fs.readdirSync(postsDir)
  // Select the files that end with .md
  .filter(file => /\.md$/i.test(file))
  // And then, get the metadata and push them in an array.
  .forEach(file => metadata.posts.push(matter.read(postsDir + file)));

// Sort by date
metadata.posts.sort((first, second) => {
  return (
    new Date(second.data.date).getTime() - new Date(first.data.date).getTime()
  );
});

// Write the data in the file
fs.writeFile(metadataJson, JSON.stringify(metadata), err => {
  if (err) {
    return console.error(err);
  }

  console.log(`=> ${metadataJson} was saved!`);
});
