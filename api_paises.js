fetch("https://restcountries.eu/rest/v2/lang/es")
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Parece que hubo un problema. Código de estado: " + response.status
      );
      return;
    }

    // Respuesta JSON
    response.json().then((data) => {
      console.log(data);
    
      const html = data.slice(0, 12).map((paises) => {
     
        return `

        <div>
            <div> 
            <div class="pais"> País: ${paises.name}</div> <br>
            Capital: ${paises.capital} <br>
            Población: ${paises.population} 
            </div>
        </div>

        `;
        
      })
      .join("");
        
      document
      .querySelector("#aplicacion")
      .insertAdjacentHTML("beforebegin", html);

      console.log(html);
    });

  })
  .catch((err) => {
    console.log("Fetch Error :( ", err);
  });



const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
  
