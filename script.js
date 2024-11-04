const htmlinput=document.getElementById('html-input');
const cssinput=document.getElementById('css-input');
const jsinput=document.getElementById('js-input');
const runBtn=document.getElementById("run-btn");
const output=document.querySelector('.output-pane');
const iframe=document.getElementById('live-output').contentWindow.document;
runBtn.addEventListener("click",function(){
    const html=htmlinput.value;
    console.log(html);
    let css=cssinput.value;
    let js=jsinput.value;
    iframe.open();
    iframe.write(html);
    
})
