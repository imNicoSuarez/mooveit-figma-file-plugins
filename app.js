document.getElementById('check').onclick = () => {
  
    // const textbox = document.getElementById('count');
    // const count = parseInt(textbox.value, 10);
    parent.postMessage({ pluginMessage: { type: 'check-file'} }, '*')
  }
  
  
  
  
  
onmessage = (event) => {
    console.log(event);
    const pageData = event.data.pluginMessage ;
  
    const dataValid = ['Design [Done]', 'Design [In progress]'];
    const htmlData = [];
    const container = document.getElementById('validation');
  
    for (let index = 0; index < dataValid.length; index++) {
      const data = dataValid[index];
      const dataVal = pageData.find(pageData => pageData === data)
      if(typeof dataVal == 'undefined') {
        htmlData.push(createTag("El nombre: "+data+" no fue creado", "incorrect"));
  
      } else {
        htmlData.push(createTag("Validado "+data+" ", "correct"));
      }
    }
    container.innerHTML="";
    console.log( container.html);
    for (let index = 0; index < htmlData.length; index++) {
      const htmlD = htmlData[index];
      container.appendChild(htmlD);
    }
  
  }
  
  document.getElementById('cancel').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }
  
  const createTag = (text, styleClass) =>{
    var x = document.createElement("P");  
        x.classList.add(styleClass);                     
    var t = document.createTextNode(text);    // Create a text node
    x.appendChild(t); 
    return x;
  }
  
  const myTimer = (e) => {
    parent.postMessage({ pluginMessage: { type: 'check-file'} }, '*')
  }
  
  setInterval(myTimer, 1000);