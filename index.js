function boasvindas(){
    var txt = window.document.getElementById('txt').value
    var email = window.document.getElementById('email').value
    var tel = window.document.getElementById('tel').value
    var res = window.document.getElementById('res')

    res.innerHTML = `Olá ${txt} embreve você recebera uma mensagem com mais instruções no seu email informado <strong>${email}<strong>`

}
