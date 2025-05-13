const BLOG_CONTENT = {
  para1: `This page is generated dynamically using Vanilla JavaScript. The text and image you are seeing is loaded from a JS object that is being looped over. On each iteration the property is turned into either a <p> or a <img> depending on how the property is named.
  For instance to load a paragraph the property must have the word 'para' in it. To load an image the property's name must have 'img' in it. In these cases the properties are called para1, img1, and para2.`,
  img1: {
    url: "../../assets/i_got_this.png",
    altText: "RAMBO!!!",
    caption: "Thumbs up Rambo!",
  },
  para2: `This is para2 that is being loaded here. For this page the JavaScript is appending child elements to the div with the ID of 'content_area' Since I am using string literals to display this text, I have the ability to make my own breks in the paragraph.
  
  Like this.`,
};