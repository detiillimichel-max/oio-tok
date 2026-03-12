<script src="https://www.youtube.com/iframe_api"></script>
<script>
    let player;
    // LISTA DE VÍDEOS LIBERADOS PELO YOUTUBE
    const lista = ['jNQXAC9IVRw', 'hT_nvWreI6o', '9fkSHe6IAn4', '36YnV9STBqc'];

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('display', {
            videoId: lista[0],
            playerVars: { 
                'autoplay': 1, 
                'controls': 0, 
                'modestbranding': 1, 
                'loop': 1, 
                'playlist': lista[0],
                'rel': 0,
                'showinfo': 0
            },
            events: { 
                'onReady': (e) => { 
                    e.target.mute(); 
                    e.target.playVideo(); 
                } 
            }
        });
    }

    // DESTRAVA O SOM E O VÍDEO NO PRIMEIRO TOQUE
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
            navigator.share({ 
                title: 'OIO ONE', 
                url: window.location.href 
            });
        }
    }
</script>
