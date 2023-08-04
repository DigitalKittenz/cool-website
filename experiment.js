function timing() {
    let a = document.getElementsByTagName("cib-serp")[0].shadowRoot.getElementById('cib-conversation-main').shadowRoot.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;
    while (a.shadowRoot.innerHTML.includes("<slot>")) {
        let b = a;
        //console.log(a.shadowRoot.innerHTML);
        a = a.nextElementSibling;
    }
    let b;
    try {
        if (b.shadowRoot.firstElementChild.nextElementSibling.shadowRoot.firstElementChild.nextElementSibling.nextElementSibling == undefined) {
            b = b.shadowRoot.firstElementChild.nextElementSibling.shadowRoot.firstElementChild.nextElementSibling.nextElementSibling.shadowRoot.firstElementChild.firstElementChild.innerHTML;
        } else {
            b = b.shadowRoot.firstElementChild.nextElementSibling.shadowRoot.firstElementChild.nextElementSibling.nextElementSibling.shadowRoot.firstElementChild.firstElementChild.innerHTML;
        }
    }
    catch {
        b = ""
    }
    
    let c;
    if (!(b.includes('My mistake, I can’t give a response to that right now. Let’s try a different topic.'))) {
        c = b;
    }
    console.log(c);
    setTimeout(timing, 1000);
}

timing();