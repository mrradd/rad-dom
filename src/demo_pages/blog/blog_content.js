const BLOG_CONTENT = {
  _para_1: `This page is generated dynamically using Vanilla JavaScript. The text and image you are seeing is loaded from a JS object that is being looped over. On each iteration the property is turned into either a <p> or a <img> depending on how the property is named.
  For instance to load a paragraph the property must have the word '_para_' in it. To load an image the property's name must have '_img_' in it. In these cases the properties are called '_para_1', '_img_1', and '_para_2'.`,
  _img_1: {
    url: "../../assets/i_got_this.png",
    altText: "RAMBO!!!",
    caption: "Thumbs up Rambo!",
  },
  _para_2: `This is '_para_2' that is being loaded here. For this page the JavaScript is appending child elements to the div with the ID of 'content_area' Since I am using string literals to display this text, I have the ability to make my own breks in the paragraph.
  
  Like this.`,
};