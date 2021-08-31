
const addScript = url => {
    const script = document.createElement("script")
    script.async = true
    // script.innerHTML = `_affirm_config = {
    //     public_api_key: "X3PZ0J10FJR3UH6C",
    //     script: "https://cdn1.affirm.com/js/v2/affirm.js"
    // };
    // (function (l, g, m, e, a, f, b) { var d, c = l[m] || {}, h = document.createElement(f), n = document.getElementsByTagName(f)[0], k = function (a, b, c) { return function () { a[b]._.push([c, arguments]) } }; c[e] = k(c, e, "set"); d = c[e]; c[a] = {}; c[a]._ = []; d._ = []; c[a][b] = k(c, a, b); a = 0; for (b = "set add save post open empty reset on off trigger ready setProduct".split(" "); a < b.length; a++)d[b[a]] = k(c, e, b[a]); a = 0; for (b = ["get", "token", "url", "items"]; a < b.length; a++)d[b[a]] = function () { }; h.async = !0; h.src = g[f]; n.parentNode.insertBefore(h, n); delete g[f]; d(g); l[m] = c })(window, _affirm_config, "affirm", "checkout", "ui", "script", "ready");`

    script.innerHTML = `
    (function(a,b,c,d,e,f,g){e['ire_o']=c;e[c]=e[c]||function(){(e[c].a=e[c].a||[]).push(arguments)};f=d.createElement(b);g=d.getElementsByTagName(b)[0];f.async=1;f.src=a;g.parentNode.insertBefore(f,g);})('https://d.impactradius-event.com/A2630395-b54a-44f1-b0d0-7f09d478bf371.js','script','ire',document,window);
    `

    const scriptBody = document.createElement("script")
    scriptBody.innerHTML = `
    ire('identify', {customerId: '', customerEmail: ''});
    `
    document.head.appendChild(script);
    document.body.appendChild(scriptBody);
}

const addRefresh = () => {
    const script = document.createElement("script")
    // script.innerHTML = `window.affirm.ui.ready(function () {
    //     window.affirm.ui.refresh();
    // });`
    document.head.appendChild(script);
}

export const onClientEntry = () => {
    window.onload = () => {
        addScript("");
        addRefresh();
    }
}