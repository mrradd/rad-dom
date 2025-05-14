const BLOG_CONTENT = {
  _para_1: `This page is generated dynamically using Vanilla JavaScript. The text and images you are seeing are loaded from a JS object that is being looped over. On each iteration the property is turned into either a <p> or a <img> depending on how the property is named.`
  ,_para_2: `For instance to load a paragraph the property name must have the word '_para_' in it. To load an image the property's name must have '_img_' in it. In these cases the properties are called '_para_1', _para_2, '_img_1', _img_2, and '_para_3'.`
  ,_img_1: {
    url: "../../assets/i_got_this.png",
    altText: "RAMBO!!!",
    caption: "He's got this!",
  }
  ,_img_2: {
    url: "../../assets/techpriest_support.png",
    altText: "Techpriest support",
    caption: "Tech support",
  }
  ,_para_3: `This is '_para_3' that is being loaded here. For this page the JavaScript is appending child elements to the div with the ID of 'content_area' Since I am using string literals to display this text, I have the ability to make my own breaks in the paragraph.
  
  Like this.`
  ,
};