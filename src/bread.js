export default `
var count = 0;
var registerInterval = setInterval(() => {
  count++;
  if(count > 10){
    clearInterval(registerInterval);
  }
  if (bread) {
    console.log("BREAD__", bread);
    clearInterval(registerInterval);
    var opts = {
      customCSS: '@import url("https://fonts.googleapis.com/css?family=Rubik".);#bread-button,body,html{margin:0;width:100%}body{display:table}#bread-button{background:#ffffff;color:#000000;border:0px solid #ffffff;border-radius:0px;display:table-cell;font-family:Muli, sans-serif;font-size:16px;font-weight:400;text-align:left;vertical-align:middle;transition:all .3s ease}.bread-btn{cursor:pointer}#bread-button.bread-btn:hover{background:#ffffff}.bread-embed-inner,.bread-label .bread-embed-icon{display:inline-block}.bread-label .bread-embed-icon:after{background:rgba(255,255,255,.5);border-radius:50px;color:#333;content:"i";cursor:pointer;display:inline-block;line-height:1;margin-left:8px;padding:4px 9px}.bread-pot{font-size:0.8rem;font-weight:400;color:#a3a3aa;}.bread-pot:before{content:"See if you qualify"}.bread-btn .bread-as-low-as:before,.bread-label .bread-as-low-as:before{content:"As low as "}.bread-for:before{content:"For "}#bread-logged-out{text-decoration: underline}',
      buttonId: 'bread-checkout-btn',
      actAsLabel: false,
      allowCheckout: false,
      asLowAs: false,
      items: [
        {
          name: 'Stryde',
          price: 155000,
          sku: 'Stryde1',
          imageUrl: '[REPLACEMEWITHAREALURL]',
          detailUrl: '[REPLACEMEWITHAREALURL]',
          quantity: 1
        }]
    };
    bread.checkout(opts);
  }
}, 1000);`
