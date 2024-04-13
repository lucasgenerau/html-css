<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alinhamento vertical de contêineres</title>
    <style>
      section#container{
        position: relative;
        height: 94vh;
        padding: 10px;
        background-color: gray;
       
      }

      article#conteudo{
        height: 280px;
        max-width: 360px;
        border: 1px solid black;
        border-radius: 10px;
        background: gainsboro url(imagens/mascote-html5.png) center center no-repeat;
       
        background-size: contain;
        margin: auto;

      }
    </style>
</head>
<body>
    <section id="container">

        <article id="conteudo"></article>

    </section>
</body>
</html>