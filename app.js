const data = {
  entradas: {
    feature: {
      name:"Sampler",
      price:350,
      desc:"200 gr de boneless bañados en tu salsa favorita, 300 gr de alitas, 3 pzas de dedos de queso, 400 gr de papas y vegetales.",
      image:"assets/samples-banner-general.jpg"
    },
    items:[
      {name:"Dedos de queso",price:90,desc:"5 pzas de dedo de queso, acompañados de salsa pomodoro."},
      {name:"Papas sazonadas",price:90,desc:"Elige tu tipo de papas favoritas: gajo o francesas."},
      {name:"Aros de cebolla",price:90,desc:"10 piezas."},
      {name:"Papas Bonezza",price:115,desc:"Papas gratinadas con un mix de quesos y tocino."},
      {name:"Vegetales",price:49,desc:"Bastones de zanahoria y pepino."},
      {name:"Alitas",price:149,variants:["300 gr — $149","600 gr — $250"],desc:"Alitas de pollo bañadas en salsa, acompañadas de zanahoria, pepino y papas sazonadas."},
      {name:"Boneless 200gr",price:155,desc:"Trozos de pechuga de pollo sin hueso y bañados en salsa a elegir. Acompañados de zanahoria, pepino y papas a elegir."}
    ]
  },

  pizzas:{
    feature:{
      name:"Arma tu pizza",
      price:160,
      desc:"Pizza clásica: 2 ingredientes por $160 o 4 ingredientes por $220. Elige tus ingredientes favoritos.",
      image:"assets/pizza-banner-general.jpg"
    },
    items:[
      {name:"Pizza norteña",price:270,desc:"Mix de quesos, morrón, cebolla morada, 150 gr de top sirloin, philadelphia y cebollín."},
      {name:"Carnívora",price:260,desc:"Mix de quesos, chorizo, salchicha ahumada, tocino, chorizo argentino y chilorio."},
      {name:"Bonezza",price:245,desc:"Mix de quesos, tomate cherry, 200 gr de boneless (salsa a elegir), pimiento y cebolla."},
      {name:"Pizza gobernador",price:270,desc:"Mix de quesos, camarones a la mantequilla con salsa gobernador, pimientos y philadelphia."},
      {name:"4 quesos",price:220,desc:"Queso gouda, manchego, philadelphia y parmesano."},
      {name:"Margarita",price:230,desc:"Tomate cherry, mozarella fresco, albahaca y tomate."},
      {name:"Hawaiana",price:220,desc:"Mix de quesos, jamón, piña, cereza y tocino."},
      {name:"Mexicana",price:245,desc:"Mix de quesos, chorizo, frijoles, jalapeño, chilorio y tomate."},
      {name:"Serranita",price:270,desc:"Mix de quesos, jamón serrano, queso de cabra, espinaca, cebolla caramelizada, arándano y toque de mostaza miel.",badge:"Nuevo · Temporada"}
    ]
  },

  pastas:{
    feature:{
      name:"Pasta Bonezza",
      price:150,
      desc:"Fetuccini en salsa de crema chipotle, tocino, pimiento y mix de quesos. Pollo $150 · Camarón $165 · Mixto $180.",
      image:"assets/pastas.jpg"
    },
    items:[
      {name:"Bolognesa",price:150,variants:["Carne molida — $150","Sin proteína — $130","Champiñón — $150"],desc:"Pasta con salsa pomodoro, zanahoria y mix de quesos."},
      {name:"Fetuccini Alfredo",price:150,variants:["Pollo — $150","Camarón — $170","Sin proteína — $130","Mixto — $180"],desc:"Fetuccini en salsa Alfredo. Acompañada con tiras de pan."}
    ]
  },

  crepas:{
    items:[
      {
        name:"Crepas dulces",
        price:120,
        desc:"Elige hasta 5 ingredientes.",
        variants:["Almendra","Cajeta","Chantilly","Chocolate","Durazno","Fresa","Lecherita","Miel","Nieve de vainilla","Nuez","Nutella","Philadelphia","Plátano","Mermelada: fresa o zarzamora"],
        badge:"Nuevo"
      }
    ]
  },

  bebidas:{
    items:[
      {name:"Naranjada mineral",price:35},
      {name:"Pepino-limón",price:35},
      {name:"Limonada mineral",price:35},
      {name:"Limonada",price:40},
      {name:"Fresa-limón",price:40},
      {name:"Fresa-kiwi",price:40},
      {name:"Té Jaztea",price:35},
      {name:"Coca Cola 600ml",price:35},
      {name:"Agua mineral",price:35},
      {name:"Jamaica",price:35},
      {name:"Limón-jamaica",price:35},
      {name:"Naranjada natural",price:35},
      {name:"Agua embotellada 600ml",price:25}
    ]
  },

  frappes:{
    items:[
      {name:"Smoothies",price:70,desc:"Base de agua o base de leche."},
      {name:"Especiales",price:85,variants:["Fresa - kiwi","Fresada","Mango - chamoy","Piñada"]},
      {name:"Frappes",price:75,variants:["Oreo","Moka","Caramelo","Ferrero","Mazapán","Gansito","Regular"]},
      {name:"Soda italiana",price:45,desc:"Mermelada de frutos rojos y agua mineral."},
      {name:"Bebida de temporada",price:95,desc:"Mezcla de extracto de pulpa de maracuyá y limón."}
    ]
  }
};


const sauces=["BBQ","Mango habanero","Tamarindo hot","Buffalo","BBQ hot"];

const pizzaIngredients=[
  "Aceituna negra",
  "Aguacate",
  "Cebolla crunch",
  "Champiñón",
  "Chilorio",
  "Chorizo",
  "Espinaca",
  "Jamón",
  "Morrón",
  "Peperoni",
  "Piña",
  "Salchicha",
  "Tocino",
  "Philadelphia"
];


let current="entradas";
let cart=[];
let modalItem=null;
let modalQty=1;
let modalOptions=[];


const money=n=>"$"+n.toLocaleString("es-MX");
const $=s=>document.querySelector(s);


function render(){

  const cat=data[current];

  $(".tab.active")?.classList.remove("active");

  document
    .querySelector(`[data-category="${current}"]`)
    ?.classList.add("active");

  const f=$("#featured");

  f.innerHTML=cat.feature
    ? `<article class="feature-card">
        <img src="${cat.feature.image}" alt="${cat.feature.name}">
        <div class="feature-info">
          <span class="badge">Recomendado</span>
          <h3>${cat.feature.name}</h3>
          <p>${cat.feature.desc}</p>
          <div class="price">${money(cat.feature.price)}</div>
          <button class="cta" onclick='openItem(${JSON.stringify(cat.feature)})'>
            Personalizar / agregar
          </button>
        </div>
      </article>`
    : "";

  $("#products").innerHTML=(cat.items||[])
    .map((x,i)=>`
      <article class="card" onclick='openItem(data["${current}"].items[${i}])'>
        ${x.badge?`<span class="badge">${x.badge}</span>`:""}

        <div class="card-top">
          <h3>${x.name}</h3>
          <div class="price">${money(x.price)}</div>
        </div>

        <p>
          ${x.desc||""}
          ${x.variants?`<br><small>${x.variants.slice(0,3).join(" · ")}</small>`:""}
        </p>

        <div class="more">Ver opciones →</div>
      </article>
    `)
    .join("");
}


function openItem(item){

  modalItem=item;
  modalQty=1;
  modalOptions=[];

  const isPizza=item.name.toLowerCase().includes("arma tu pizza");

  const options =
    item.name==="Sampler"
    ?
    `<div class="option-title">Extra</div>
     <div class="options">
       <button class="option" data-opt="Sampler solo boneless +$35">
         Sampler solo boneless +$35
       </button>
     </div>`

    :

    isPizza
    ?
    `<div class="option-title">Tamaño / ingredientes</div>

     <div class="options">

       <button class="option selected"
         data-price="160"
         data-opt="2 ingredientes">
         2 ingredientes · $160
       </button>

       <button class="option"
         data-price="220"
         data-opt="4 ingredientes">
         4 ingredientes · $220
       </button>

     </div>

     <div class="option-title">
       Ingredientes (elige hasta 5)
     </div>

     <div class="options">
       ${pizzaIngredients
         .map(v=>`
           <button class="option" data-opt="${v}">
             ${v}
           </button>
         `)
         .join("")}
     </div>

     <div class="option-title">Salsa</div>

     <div class="options">
       ${sauces
         .map(v=>`
           <button class="option" data-opt="${v}">
             ${v}
           </button>
         `)
         .join("")}
     </div>`

    :

    item.variants
    ?
    `<div class="option-title">Elige una opción</div>

     <div class="options">
       ${item.variants
         .map(v=>`
           <button class="option" data-opt="${v}">
             ${v}
           </button>
         `)
         .join("")}
     </div>`

    :

    "";


  $("#modalContent").innerHTML=`

    <span class="badge">Personaliza</span>

    <h3 id="modalTitle">
      ${item.name}
    </h3>

    <p class="modal-desc">
      ${item.desc||""}
    </p>

    ${options}

    <div class="qty">

      <span>Cantidad</span>

      <button onclick="changeQty(-1)">−</button>

      <strong id="modalQty">1</strong>

      <button onclick="changeQty(1)">+</button>

    </div>

    <div class="modal-actions">

      <strong id="modalPrice">
        ${money(item.price)}
      </strong>

      <button class="cta" onclick="addToCart()">
        Agregar al pedido
      </button>

    </div>
  `;


  document
    .querySelectorAll(".option")
    .forEach(btn=>
      btn.addEventListener(
        "click",
        ()=>selectOption(btn,isPizza)
      )
    );


  $("#modalBackdrop").classList.remove("hidden");
}


function selectOption(btn,isPizza){

  const opt=btn.dataset.opt;

  if(isPizza && btn.dataset.price){

    document
      .querySelectorAll("[data-price]")
      .forEach(b=>b.classList.remove("selected"));

    btn.classList.add("selected");

    modalItem={
      ...modalItem,
      price:Number(btn.dataset.price)
    };

    $("#modalPrice").textContent=
      money(modalItem.price*modalQty);

    return;
  }


  if(isPizza && !btn.dataset.price){

    const chosen=[
      ...document.querySelectorAll(".option.selected")
    ].map(x=>x.dataset.opt);


    if(btn.classList.contains("selected")){

      btn.classList.remove("selected");

    }

    else if(
      chosen.filter(
        x=>pizzaIngredients.includes(x)
      ).length>=5
      &&
      pizzaIngredients.includes(opt)
    ){

      return;

    }

    else{

      btn.classList.add("selected");

    }

  }

  else{

    document
      .querySelectorAll(".option")
      .forEach(b=>{

        if(
          b.dataset.opt?.startsWith(
            opt.split(" — ")[0]
          )
        ){
          b.classList.remove("selected");
        }

      });

    btn.classList.add("selected");
  }
}


function changeQty(n){

  modalQty=Math.max(
    1,
    modalQty+n
  );

  $("#modalQty").textContent=modalQty;

  $("#modalPrice").textContent=
    money(modalItem.price*modalQty);
}


function addToCart(){

  const opts=[
    ...document.querySelectorAll(".option.selected")
  ]
  .map(x=>x.dataset.opt)
  .filter(Boolean);


  const item={
    name:modalItem.name,
    price:modalItem.price,
    qty:modalQty,
    opts
  };


  cart.push(item);

  closeModal();

  renderCart();

  openCart();
}


function renderCart(){

  $("#cartCount").textContent=
    cart.reduce(
      (a,x)=>a+x.qty,
      0
    );


  $("#cartItems").innerHTML=
    cart.length

    ?

    cart.map((x,i)=>`

      <div class="cart-row">

        <strong>
          ${x.qty}× ${x.name}
        </strong>

        <small>
          ${x.opts.join(" · ")||"Sin personalización"}
        </small>

        <div class="row-bottom">

          <span>
            ${money(x.price*x.qty)}
          </span>

          <button
            class="option"
            onclick="removeCart(${i})">
            Quitar
          </button>

        </div>

      </div>

    `).join("")

    :

    `<div class="empty">
      Tu pedido está vacío.<br>
      Agrega algo rico del menú.
    </div>`;


  $("#cartTotal").textContent=
    money(
      cart.reduce(
        (a,x)=>a+x.price*x.qty,
        0
      )
    );
}


function removeCart(i){

  cart.splice(i,1);

  renderCart();
}


function closeModal(){

  $("#modalBackdrop")
    .classList
    .add("hidden");
}


function openCart(){

  $("#cartDrawer")
    .classList
    .add("open");

  $("#scrim")
    .classList
    .remove("hidden");
}


function closeCart(){

  $("#cartDrawer")
    .classList
    .remove("open");

  $("#scrim")
    .classList
    .add("hidden");
}


/* =====================================================
   CHECKOUT
   ===================================================== */


function openCheckout(){

  if(!cart.length){

    alert("Agrega productos antes de finalizar.");

    return;
  }


  const total=cart.reduce(
    (total,item)=>
      total+(item.price*item.qty),
    0
  );


  const checkoutHTML=`

    <div class="checkout-overlay" id="checkoutOverlay">

      <div class="checkout-box">

        <button
          class="checkout-close"
          onclick="closeCheckout()">
          ×
        </button>


        <div class="checkout-header">

          <span class="badge">
            BONEZZA
          </span>

          <h2>
            Finalizar pedido
          </h2>

          <p>
            Completa tus datos para enviar tu pedido.
          </p>

        </div>


        <form id="checkoutForm">


          <div class="checkout-section">

            <h3>
              Información de contacto
            </h3>


            <label>
              Nombre completo

              <input
                type="text"
                id="clienteNombre"
                placeholder="Ej. Julio Castillo"
                required
              >

            </label>


            <label>
              Teléfono

              <input
                type="tel"
                id="clienteTelefono"
                placeholder="Ej. 667 123 4567"
                required
              >

            </label>

          </div>



          <div class="checkout-section">

            <h3>
              Tipo de pedido
            </h3>


            <div class="checkout-options">

              <label class="checkout-option">

                <input
                  type="radio"
                  name="tipoPedido"
                  value="Domicilio"
                  required
                  onchange="toggleDireccion(true)"
                >

                <span>
                  Domicilio
                </span>

              </label>


              <label class="checkout-option">

                <input
                  type="radio"
                  name="tipoPedido"
                  value="Recoger en sucursal"
                  onchange="toggleDireccion(false)"
                >

                <span>
                  Recoger
                </span>

              </label>


              <label class="checkout-option">

                <input
                  type="radio"
                  name="tipoPedido"
                  value="Comer en restaurante"
                  onchange="toggleDireccion(false)"
                >

                <span>
                  Comer aquí
                </span>

              </label>

            </div>

          </div>



          <div
            class="checkout-section"
            id="direccionSection"
            style="display:none;">

            <h3>
              Dirección de entrega
            </h3>


            <label>

              Dirección completa

              <textarea
                id="direccion"
                placeholder="Calle, número, colonia..."
              ></textarea>

            </label>


            <label>

              Referencias

              <input
                type="text"
                id="referencias"
                placeholder="Ej. Casa blanca frente al parque"
              >

            </label>

          </div>



          <div class="checkout-section">

            <h3>
              Método de pago
            </h3>


            <div class="checkout-options">

              <label class="checkout-option">

                <input
                  type="radio"
                  name="metodoPago"
                  value="Efectivo"
                  required
                >

                <span>
                  Efectivo
                </span>

              </label>


              <label class="checkout-option">

                <input
                  type="radio"
                  name="metodoPago"
                  value="Tarjeta"
                >

                <span>
                  Tarjeta
                </span>

              </label>


              <label class="checkout-option">

                <input
                  type="radio"
                  name="metodoPago"
                  value="Transferencia"
                >

                <span>
                  Transferencia
                </span>

              </label>

            </div>

          </div>



          <div class="checkout-section">

            <h3>
              Notas del pedido
            </h3>


            <textarea
              id="notas"
              placeholder="¿Alguna indicación especial? (Opcional)"
            ></textarea>

          </div>



          <div class="checkout-summary">

            <h3>
              Resumen
            </h3>


            <div id="checkoutProducts">

              ${cart.map(item=>`

                <div class="checkout-product">

                  <div>

                    <strong>
                      ${item.qty} × ${item.name}
                    </strong>

                    ${
                      item.opts.length
                      ?
                      `<small>
                        ${item.opts.join(" · ")}
                      </small>`
                      :
                      ""
                    }

                  </div>


                  <strong>
                    ${money(item.price*item.qty)}
                  </strong>

                </div>

              `).join("")}

            </div>


            <div class="checkout-total">

              <span>
                Total
              </span>

              <strong>
                ${money(total)}
              </strong>

            </div>

          </div>



          <button
            type="submit"
            class="checkout-submit">

            Enviar pedido por WhatsApp

          </button>


        </form>

      </div>

    </div>
  `;


  document.body.insertAdjacentHTML(
    "beforeend",
    checkoutHTML
  );


  document
    .getElementById("checkoutForm")
    .addEventListener(
      "submit",
      sendToWhatsApp
    );
}


function toggleDireccion(show){

  const section=
    document.getElementById(
      "direccionSection"
    );


  section.style.display=
    show
    ? "block"
    : "none";
}


function closeCheckout(){

  const checkout=
    document.getElementById(
      "checkoutOverlay"
    );


  if(checkout){
    checkout.remove();
  }
}


function sendToWhatsApp(e){

  e.preventDefault();


  const nombre=
    document
      .getElementById("clienteNombre")
      .value
      .trim();


  const telefonoCliente=
    document
      .getElementById("clienteTelefono")
      .value
      .trim();


  const tipoPedido=
    document
      .querySelector(
        'input[name="tipoPedido"]:checked'
      )
      ?.value;


  const metodoPago=
    document
      .querySelector(
        'input[name="metodoPago"]:checked'
      )
      ?.value;


  const direccion=
    document
      .getElementById("direccion")
      .value
      .trim();


  const referencias=
    document
      .getElementById("referencias")
      .value
      .trim();


  const notas=
    document
      .getElementById("notas")
      .value
      .trim();


  if(
    tipoPedido==="Domicilio"
    &&
    !direccion
  ){

    alert(
      "Por favor escribe tu dirección de entrega."
    );

    return;
  }


  let mensaje=
    `*PEDIDO BONEZZA*\n\n`;


  mensaje+=
    `*CLIENTE*\n`+
    `${nombre}\n`+
    `Teléfono: ${telefonoCliente}\n\n`;


  mensaje+=
    `*TIPO DE PEDIDO*\n`+
    `${tipoPedido}\n\n`;


  if(tipoPedido==="Domicilio"){

    mensaje+=
      `*DIRECCIÓN*\n`+
      `${direccion}\n`;

    if(referencias){

      mensaje+=
        `Referencias: ${referencias}\n`;

    }

    mensaje+="\n";
  }


  mensaje+=
    `*MÉTODO DE PAGO*\n`+
    `${metodoPago}\n\n`;


  mensaje+=
    `*PRODUCTOS*\n\n`;


  cart.forEach(item=>{

    mensaje+=
      `${item.qty} × ${item.name}\n`;

    if(item.opts.length){

      mensaje+=
        `Opciones: ${item.opts.join(", ")}\n`;

    }

    mensaje+=
      `Subtotal: ${money(item.price*item.qty)}\n\n`;

  });


  const total=
    cart.reduce(
      (total,item)=>
        total+(item.price*item.qty),
      0
    );


  mensaje+=
    `*TOTAL: ${money(total)}*\n\n`;


  mensaje+=
    `*NOTAS*\n`+
    `${notas||"Sin notas"}`;


  /*
    ==========================================
    PON AQUÍ EL WHATSAPP REAL DE BONEZZA
    ==========================================
  */

  const numeroBonezza=
    "526677844277";


  const url=
    `https://wa.me/${numeroBonezza}?text=${encodeURIComponent(mensaje)}`;


  window.open(
    url,
    "_blank"
  );

}


/* =====================================================
   EVENTOS
   ===================================================== */


document
  .querySelectorAll(".tab")
  .forEach(t=>
    t.addEventListener(
      "click",
      ()=>{
        current=t.dataset.category;

        render();

        document
          .getElementById("menu")
          .scrollIntoView({
            behavior:"smooth"
          });
      }
    )
  );


$("#closeModal").onclick=
  closeModal;


$("#modalBackdrop")
  .addEventListener(
    "click",
    e=>{
      if(
        e.target.id==="modalBackdrop"
      ){
        closeModal();
      }
    }
  );


$("#openCart").onclick=
  openCart;


$("#closeCart").onclick=
  closeCart;


$("#scrim").onclick=
  closeCart;


/* BOTÓN FINALIZAR PEDIDO */

$("#checkoutBtn").onclick=
  openCheckout;


/* INICIAR */

render();

renderCart();
