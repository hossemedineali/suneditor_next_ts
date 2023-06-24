import React from 'react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import  align, {blockquote,font,fontColor,fontSize,formatBlock,hiliteColor,horizontalRule,lineHeight,link,list,table,template,textStyle,paragraphStyle,image,video,audio,math,imageGallery} from "suneditor/src/plugins";


import SunEditor from 'suneditor-react';


import dynamic from "next/dynamic";
const MySunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});



const MyComponent = () => {

  
  return (
    <div>
      <p> My Other Contents </p>
      <MySunEditor  
      setOptions={{
        plugins:[blockquote,font,fontColor,fontSize,formatBlock,hiliteColor,horizontalRule,lineHeight,link,list,table,template,textStyle,paragraphStyle,image,video,audio,math,imageGallery],
        buttonList:[
          [
            "undo",
            "redo",
            "font",
            "fontSize",
            "formatBlock",
            "paragraphStyle",
            "blockquote",
            "bold",
            "underline",
            "italic",
            "strike",
            "subscript",
            "superscript",
            "fontColor",
            "hiliteColor",
            "textStyle",
            "removeFormat",
            "outdent",
            "indent",
            "align",
            "horizontalRule",
            "list",
            "lineHeight",
            "table",
            "link",
            "image",
            "video",
            "audio",
          //  "math",
            "imageGallery",
            "fullScreen",
            "showBlocks",
            "codeView",
            "preview",
            "print",
            "save",
            "template"
          ]
        ]
      }}
        />
    </div>
  );
};
export default MyComponent;