var contador = 0, select_opt = 0;

function add_to_list(){
  var product = document.querySelector('#product_select').value,
  address = document.querySelector('.input_description').value,
  user = document.querySelector('.user_name').value,
  qta = document.getElementById('qta_select').value;
  time = document.getElementById('time_select').value;

  switch (product) {
    case "Brioches al cioccolato":
    select_opt  = 0;
    break;
    case "Cialde all'uvetta":
    select_opt = 1;
    break;
    case "Croissant all'albicocca":
    select_opt = 2;
    break;
    case "Bomboloni alla crema":
    select_opt = 3;
    break;
    case "Ciambelle cannella":
    select_opt = 4;
    break;
    case "Fagottini al miele":
    select_opt = 5;
    break;
  }

//  var class_li  =['list_brioches list_dsp_none','list_cialde list_dsp_none','list_croissant list_dsp_none','list_bomboloni list_dsp_none', 'list_fagottini list_dsp_none', 'list_ciambelle list_dsp_none']; //,'list_work list_dsp_none','list_sport list_dsp_none','list_music list_dsp_none'
  var class_li  =['today_selection list_dsp_none','today_selection list_dsp_none','today_selection list_dsp_none','today_selection list_dsp_none', 'today_selection list_dsp_none', 'today_selection list_dsp_none'];

  var cont = '<div class="col_md_1_list">    <p>'+product+'</p>    </div> <div class="col_md_2_list"> <h6>'+user+'</h6> <p>'+address+'</p> </div>    <div class="col_md_3_list"> <div class="cont_text_date"> <p>'+qta+'</p>  </div>  <div class="cont_btns_options">    <ul>  <li><a href="#finish" onclick="finish_action('+select_opt+','+contador+');" ><i class="fa">&#xf00d;</i></a></li>   </ul>  </div>    </div>';

  var li = document.createElement('li')
  li.className = class_li[select_opt]+" li_num_"+contador;

  li.innerHTML = cont;
  document.querySelectorAll('.item_container > ul')[0].appendChild(li);

  setTimeout(function(){document.querySelector('.li_num_'+contador).style.display = "block";},100);

  setTimeout(function(){
  document.querySelector('.li_num_'+contador).className = "list_dsp_true "+class_li[select_opt]+" li_num_"+contador;
  contador++;},200);

//calcola il totale (somma)
  var cont_bag = document.getElementById('tot');
  var int_bag = parseFloat(cont_bag.innerHTML.slice(0,-1));
  var current_price = parseFloat(qta.slice(5,-1));
  var bag = int_bag + current_price;
  document.getElementById('tot').innerHTML = bag.toFixed(1) + '&euro;';
}


function finish_action(num,num2) {
  //var class_li =['list_brioches list_dsp_true','list_cialde  list_dsp_true','list_croissant list_dsp_true','list_bomboloni list_dsp_true', 'list_fagottini list_dsp_none', 'list_ciambelle list_dsp_none'];  //,'list_work  list_dsp_true','list_sport list_dsp_true','list_music list_dsp_true'
  var class_li =['today_selection list_dsp_true','today_selection  list_dsp_true','today_selection list_dsp_true','today_selection list_dsp_true', 'today_selection list_dsp_none', 'today_selection list_dsp_none'];
  console.log('.li_num_'+num2);
  document.querySelector('.li_num_'+num2).className = class_li[num]+" list_finish_state";
  setTimeout(function(){
    del_finish();
  },500);
}

function del_finish(){
  var li = document.querySelectorAll('.list_finish_state');
  for(var e = 0; e < li.length; e++){
    //calcola il totale (sottrazione)
    var pippo = li[e].lastElementChild.innerText;
    var pippoln = parseFloat(pippo.slice(5,8));
    var cont_bag = document.getElementById('tot');
    var int_bag = parseFloat(cont_bag.innerHTML.slice(0,-1));
    var refresh_bag = int_bag - pippoln;
    document.getElementById('tot').innerHTML = refresh_bag.toFixed(1) + '&euro;';

    //setta lo stile per la rimozione dell'elemento
    /* li[e].style.left = "-100px"; */
    li[e].style.opacity = "0";
    li[e].style.height = "0px";
    li[e].style.margin = "0px";
  }

  setTimeout(function(){
    var li = document.querySelectorAll('.list_finish_state');
    console.log(li);
    for(var e = 0; e < li.length; e++){
      li[e].parentNode.removeChild(li[e]);
    }
  },500);
}

//Carousel showcase
function rotation() {
    var window = document.querySelector('.window__content');
    window.classList.toggle('step-animation');
  }


//Rotazione modulo di conferma
function confirm() {
document.querySelectorAll('.card-inner-2').forEach(item => {
    var timeout;
    clearTimeout(timeout);
    item.addEventListener('click', el => {
      if(item.style.transform == "rotateY(180deg)" ) {
        item.style.transform = "rotateY(0deg)";
      }
      else {
        item.style.transform = "rotateY(180deg)";
      }
      timeout = setTimeout(function() { 
        item.style.transform = "rotateY(0deg)"; 
      }, 10000);
    })
  })
}

function orderConfirmation() { 
    //Legge il totale e l'ora di consegna
    var tot_basket = parseFloat(document.getElementById('tot').innerHTML.slice(0,-1));
    var delivery_time = document.getElementById('time_select').value;
    var home = document.querySelector('.input_description').value;
    var customer = document.querySelector('.user_name').value;
    var hello = 'Buongiorno ' + customer + ',';
    //In base al valore del cestino e all'ora di consegna, compone il modulo di conferma
    if (tot_basket > 0 && delivery_time === "8:00 - 9:00") {
        var order_detail = "Confermi la consegna in " + home + " tra le 8:00 e le 9:00 di questa mattina del tuo ordine dall'importo totale di " + tot_basket + "&euro;?";
        document.getElementById('greetings').innerHTML = hello;
        document.getElementById('message').innerHTML = order_detail;
        document.getElementById('turn').innerHTML = '<a class="turn fa" style="display:block" onclick="confirm()">&#xf00c;</a>';
        document.getElementById('close').innerHTML = '<a class="close fa" style="display:block" href="#">&#xf00d;</a>';
        document.getElementById('basket').innerHTML = '<a class="basket fa" style="display:none" href="#">&#xf291;</a>';
    } else if (tot_basket > 0 && delivery_time === "16:00 - 17:00") {
        var order_detail = "Confermi la consegna in " + home + " tra le 16:00 e le 17:00 di questo pomeriggio del tuo ordine dall'importo totale di " + tot_basket + "&euro;?";
        document.getElementById('greetings').innerHTML = hello;
        document.getElementById('message').innerHTML = order_detail;
        document.getElementById('turn').innerHTML = '<a class="turn fa" style="display:block" onclick="confirm()">&#xf00c;</a>';
        document.getElementById('close').innerHTML = '<a class="close fa" style="display:block" href="#">&#xf00d;</a>';
        document.getElementById('basket').innerHTML = '<a class="basket fa" style="display:none" href="#">&#xf291;</a>';
    } else if (tot_basket == 0) {
        var empty = "La tua cesta è vuota, torna alla vetrina";
        document.getElementById('message').innerHTML = empty;
        document.getElementById('turn').innerHTML = '<a class="turn fa" style="display:none" onclick="confirm()">&#xf00c;</a>';
        document.getElementById('close').innerHTML = '<a class="close fa" style="display:none" href="#">&#xf00d;</a>';
        document.getElementById('basket').innerHTML = '<a class="basket fa" style="display:block" href="#">&#xf291;</a>';
    } else {
        console.log('error in orderConfirmation function');
    }
}

//Disattivazione modulo di conferma vuoto, cliccando ovunque fuori dal modale

