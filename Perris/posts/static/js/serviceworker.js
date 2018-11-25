var staticCacheName = 'Perris-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/base_layout'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
      if ((requestUrl.pathname === '/')) {
        event.respondWith(caches.match('/base_layout'));
        return;
      }
    }
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );

});


self.addEventListener("fetch",function(ev){
console.log(ev.request);

    const promiseResponse = new Promise((res,rej)=>{
    fetch(ev.request).then(response=>{

        if(response.status == 404 && event.request.destination == "img")
        return fetch("img/perro-kOnG-U40521460347ChF-624x385@Ideal.jpeg").then(res).catch(rej);
        return fetch("img/mastines-ovejas-kq6H-U50234879860gZD-624x385@El Correo.jpg").then(res).catch(rej);
        return fetch("img/perros-calor-k8PB-U60305494276GXC-624x385@Ideal1.jpg").then(res).catch(rej);
        return fetch("img/perretes-ksGC-U40396701700H5H-624x385@La Verdad1.jpg").then(res).catch(rej);
        return fetch("img/cacaperro-kVW-U60247811034EcB-624x385@Diario Sur.jpg").then(res).catch(rej);
        return fetch("img/32251817--624x936-U402330379L9G-U501097818305fj-624x385@El Comercio-ElComercio.jpg").then(res).catch(rej);
        return fetch("img/kisspng-facebook-logo-icon-facebook-logo-png-image-5a78cd9fb2d066.5692532815178663997324.PNG").then(res).catch(rej);
        return fetch("img/kisspng-image-photograph-logo-computer-icons-portable-netw-5b65ac832a2e20.9567070515333899551728.PNG").then(res).catch(rej);
        return fetch("img/kisspng-instagram-logo-social-media-clip-art-may-20-2016-5b524c3de1cdc3.9355458915321201259249.PNG").then(res).catch(rej);
        return fetch("img/kisspng-email-computer-icons-message-bounce-address-email-icon-5ac24c369ca033.5563588615226829346416.PNG").then(res).catch(rej);
        return fetch("img/images.jpg").then(res).catch(rej);
        return fetch("img/criar-a-un-cachorro-de-perro.jpg").then(res).catch(rej);
        return fetch("img/cahorro-perro-pastor-aleman.jpg").then(res).catch(rej);
        return fetch("img/perros-cachorros-cuidados.jpg").then(res).catch(rej);
        return fetch("img/Cachorro_corriendo.jpg").then(res).catch(rej);
        return fetch("img/cachorros.jpg").then(res).catch(rej);
        return fetch("img/como-adiestrar-a-perros-cachorros.jpg").then(res).catch(rej);
        return fetch("img/Perros-callejeros-mexico-3.jpg").then(res).catch(rej);
        return fetch("img/Affinity-para-todo-tipo-de-perros-.jpeg").then(res).catch(rej);
        return fetch("http://localhost:8000/static/css/images/bx_loader.gif").then(res).catch(rej);
        return fetch("http://localhost:8000/static/css/images/controls.png").then(res).catch(rej);
        
        res(response);
        

}).catch(rej);

});
    ev.respondWith(promiseResponse);

})