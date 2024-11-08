let htmlinput=document.getElementById('html-input');
const cssinput=document.getElementById('css-input');
const jsinput=document.getElementById('js-input');
const runBtn=document.getElementById("run-btn");
const output=document.querySelector('.output-pane');
const iframe=document.getElementById('live-output').contentWindow.document;
const resetBtn=document.getElementById('reset-btn');
const newproject=document.getElementById('newBtn');

runBtn.addEventListener("click",function(){
    const html=htmlinput.value;
    //console.log(html);
    let css=cssinput.value;
    let js=jsinput.value;
    iframe.open();
    iframe.open();
    iframe.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `);
    iframe.close();
})
resetBtn.addEventListener("click",function(){
    console.log("reset initiated")
    htmlinput.value="";
    cssinput.value="";
    jsinput.value="";
    iframe.open();
    iframe.write();
    iframe.close();
})
