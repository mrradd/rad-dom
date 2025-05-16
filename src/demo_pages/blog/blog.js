const ClassNames = {
  blog_nav_button: "blog_nav_button",
  content_image_caption: "content_image_caption",
  content_image: "content_image",
  content_image_container: "content_image_container",
  content_blurb: "content_blurb",
  content_image: "content_image"
}

const Constants = {
  _img_: "_img_",
  _para_: "_para_",
}

/**
 * Handle's the Content Area of the blog page.
 * @returns 
 */
function ContentArea() {
  const contentRootNode = document.getElementById("content_area");

  /**
   * Generates content dynamically based on a predefined JS object.
   */
  const generateContent = (contentObj = {}) => {
    Object.keys(contentObj).forEach((key, index, array) => {
      if(key.includes(Constants._para_)) {
        let p = RadLib.radCreateElement({
          htmlTagName: "p",
          classNames: [ClassNames.content_blurb],
          innerText: contentObj[key],
        });

        contentRootNode.appendChild(p);
      }
      else if (key.includes(Constants._img_)) {
        let imgContainer = RadLib.radCreateElement({
          htmlTagName: "div",
          classNames: [ClassNames.content_image_container],
        });

        let img = RadLib.radCreateElement({
          htmlTagName: "img",
          classNames: [ClassNames.content_image],
        });
        img.setAttribute("src", contentObj[key].url);
        
        if (contentObj[key].altText) {
          img.setAttribute("alt", contentObj[key].altText);
        }

        let imgCaption = null;
        if (contentObj[key].caption && contentObj[key].caption.length > 0){
          imgCaption = RadLib.radCreateElement({
            htmlTagName: "p",
            classNames: [ClassNames.content_image_caption],
            innerText: contentObj[key].caption
          });
        }
        
        imgContainer.appendChild(img);
        if(imgCaption) {
          imgContainer.appendChild(imgCaption);
        }

        contentRootNode.appendChild(imgContainer);
      }
    });
  }

  const render = () => {
    generateContent(BLOG_CONTENT);
  }

  const exportObject = {
    render: render,
  }

  return exportObject;
}

/**
 * Handle's the Footer Area of the blog page.
 * @returns 
 */
function FooterArea() {
  const footerRootNode = document.getElementById("footer_area");

  const render = () => {
    let footerText = RadLib.radCreateElement({
      htmlTagName: "a",
      classNames: ["footer_text"],
      innerText: "Powered by The Senator"
    });

    footerText.setAttribute("href", "https://thesenator.dev");
    footerRootNode.appendChild(footerText);
  }

  const exportObject = {
    render: render,
  }

  return exportObject;
}

/**
 * Handle's the Header Area of the blog page.
 * @returns 
 */
function HeaderArea() {
  const headerRootNode = document.getElementById("header_area");

  const render = () => {
    let pageTitle = RadLib.radCreateElement({
      htmlTagName: "h1",
      elementId: "page_title",
      innerText: "Blog Page Demo",
    });

    headerRootNode.appendChild(pageTitle);
  }

  const exportObject = {
    render: render,
  }

  return exportObject;
}

/**
 * Handle's the Nav Area of the blog page.
 * @returns 
 */
function NavArea() {
  const navRootNode = document.getElementById("nav_area");

  const render = () => {
    let navTitleContainer = RadLib.radCreateElement({
      htmlTagName: "div",
      classNames: ["nav_title_container"],
    });

    let navTitle = RadLib.radCreateElement({
      htmlTagName: "h3",
      innerText: "Recent Posts"
    });

    let button1 = RadLib.radCreateButton({
      label: "Lorem",
      classNames: [ClassNames.blog_nav_button],
      onclickFn: () => {
        alert("Lorem was pressed");
      },
    });

    let button2 = RadLib.radCreateButton({
      label: "Ipsum",
      classNames: [ClassNames.blog_nav_button],
      onclickFn: () => {
        alert("Ipsum was pressed");
      },
    });

    let button3 = RadLib.radCreateButton({
      label: "Dolar Imet",
      classNames: [ClassNames.blog_nav_button],
      onclickFn: () => {
        alert("Dolar Imet was pressed");
      },
    });

    navTitleContainer.appendChild(navTitle);
    navRootNode.appendChild(navTitleContainer);
    navRootNode.appendChild(button1);
    navRootNode.appendChild(button2);
    navRootNode.appendChild(button3);
  }

  const exportObject = {
    render: render,
  }

  return exportObject;
}

/**
 * Render the whole Blog Page.
 * @returns 
 */
function BlogDemo() {

  const render = () => {
    const header = new HeaderArea();
    const nav = new NavArea();
    const content = new ContentArea();
    const footer = new FooterArea();
    
    header.render();
    content.render();
    nav.render();
    footer.render();
  }

  const exportObject = {
    render: render,
  }

  return exportObject;
}

//Wait for the page to load before rendering, so we have targets.
window.onload = () => {
  const blog_demo = new BlogDemo();
  blog_demo.render();
};
