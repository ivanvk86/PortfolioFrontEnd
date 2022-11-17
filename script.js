function cambiar_parrafo() {
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
  };

  function myFunction2(valor) {
    document.getElementById("text-acercade").innerText=valor;
  };

  let textarea = document.getElementById("edit-acercade");
  textarea.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event:keyup]`);
    if (e.key=="Enter"){
      document.getElementById("edit-acercade").style.display="none"
    }
  });

  function showflie(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last modified: ${file.lastModified}`);

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
      console.log(reader.result);
      document.getElementById("text-acercade").innerText=reader.result;
    };
  }