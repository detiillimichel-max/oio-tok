<script src="https://www.youtube.com/iframe_api"></script>
<script>
    let player;
    // LISTA DE VÍDEOS 100% LIBERADOS
    const lista = ['hT_nvWreI6o', '9fkSHe6IAn4', '36YnV9STBqc', '7X8m6SHe52I'];

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('display', {
            videoId: lista[0],
            playerVars: { 
                'autoplay': 1, 
                'controls': 0, 
                'modestbranding': 1, 
                'loop': 1, 
                'playlist': lista[0],
                'origin': window.location.origin
            },
            events: { 
                'onReady': (e) => { 
                    e.target.mute(); 
                    e.target.playVideo(); 
                } 
            }
        });
    }

    // AO CLICAR NA TELA, O VÍDEO DESTREVA
    document.body.onclick = () => { 
        if(player && player.unMute) { 
            player.unMute(); 
            player.playVideo(); 
        } 
    };

    function proximo() {
        const novoId = lista[Math.floor(Math.random() * lista.length)];
        player.loadVideoById(novoId);
        if(navigator.vibrate) navigator.vibrate(40);
    }

    function compartilhar() {
        if(navigator.share) {
            navigator.share({ title: 'OIO ONE', url: window.location.href });
        }
    }
</script>
