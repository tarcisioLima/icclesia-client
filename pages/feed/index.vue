<template>
<div id="content-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-4 reset-pdr">         
        <!-- histories component --> 
        <div class="history-component">
          <ul class="friend-list">
           
            <li class="user active">
              <figure class="img-box">
                <span class="counter">5</span>
                <div class="wrap-image">
                  <img src="/images/tarcisio.jpg" class="image" alt="user photo">
                </div>
              </figure>
              <div class="content">
                <h6 class="user-name">Tarcísio Thallys</h6>
                <div class="informations">5h <span class="dot">•</span> tarcisio_thallys</div>
              </div>
            </li>
            <li class="user">
              <figure class="img-box">
                <span class="counter">5</span>
                <div class="wrap-image">
                  <img src="/images/tarcisio.jpg" class="image" alt="user photo">
                </div>
              </figure>
              <div class="content">
                <h6 class="user-name">Tarcísio Thallys</h6>
                <div class="informations">5h <span class="dot">•</span> tarcisio_thallys</div>
              </div>
            </li>
            <li class="user active">
              <figure class="img-box">
                <span class="counter">5</span>
                <div class="wrap-image">
                  <img src="/images/tarcisio.jpg" class="image" alt="user photo">
                </div>
              </figure>
              <div class="content">
                <h6 class="user-name">Tarcísio Thallys</h6>
                <div class="informations">5h <span class="dot">•</span> tarcisio_thallys</div>
              </div>
            </li>
            
            <li class="user">
              <figure class="img-box">
                <span class="counter">5</span>
                <div class="wrap-image">
                  <img src="/images/tarcisio.jpg" class="image" alt="user photo">
                </div>
              </figure>
              <div class="content">
                <h6 class="user-name">Tarcísio Thallys</h6>
                <div class="informations">5h <span class="dot">•</span> tarcisio_thallys</div>
              </div>
            </li>
            <li class="user active">
              <figure class="img-box">
                <span class="counter">5</span>
                <div class="wrap-image">
                  <img src="/images/tarcisio.jpg" class="image" alt="user photo">
                </div>
              </figure>
              <div class="content">
                <h6 class="user-name">Tarcísio Thallys</h6>
                <div class="informations">5h <span class="dot">•</span> tarcisio_thallys</div>
              </div>
            </li>
            <li class="user">
              <figure class="img-box">
                <span class="counter">5</span>
                <div class="wrap-image">
                  <img src="/images/tarcisio.jpg" class="image" alt="user photo">
                </div>
              </figure>
              <div class="content">
                <h6 class="user-name">Tarcísio Thallys</h6>
                <div class="informations">5h <span class="dot">•</span> tarcisio_thallys</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- ! histories component ! --> 

        <!-- Topics box -->
        <div class="topics-box">
          <ul class="row category-list">
            <li class="col-md-6 item">
              <a href="">
                <figure class="wrap-img">
                  <img src="/images/categorias/modestia.jpg" alt="Modéstia">
                  <figcaption class="category-name">Modéstia</figcaption>
                </figure>
              </a>
            </li>
            <li class="col-md-6 item">
              <a href="">
                <figure class="wrap-img">
                  <img src="/images/categorias/oracao.jpg" alt="Orações">
                  <figcaption class="category-name">Orações</figcaption>
                </figure>
              </a>
            </li>
            <li class="col-md-6 item">
              <a href="">
                <figure class="wrap-img">
                  <img src="/images/categorias/historia.jpeg" alt="História da Igreja">
                  <figcaption class="category-name">História da Igreja</figcaption>
                </figure>
              </a>
            </li>
            <li class="col-md-6 item">
              <a href="">
                <figure class="wrap-img">
                  <img src="/images/categorias/sacramentos.jpg" alt="Sacramentos">
                  <figcaption class="category-name">Sacramentos</figcaption>
                </figure>
              </a>
            </li>
            <li class="col-md-6 item">
              <a href="">
                <figure class="wrap-img">
                  <img src="/images/categorias/educacao-infantil.jpg" alt="Educação Infantil">
                  <figcaption class="category-name">Educação Infantil</figcaption>
                </figure>
              </a>
            </li>
            <li class="col-md-6 item">
              <a href="">
                <figure class="wrap-img">
                  <img src="/images/categorias/juventude.jpg" alt="Juventude">
                  <figcaption class="category-name">Juventude</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </div>
        <!-- ! Topics box ! -->

      </div> 
      <!-- CENTER --> 
      <!-- PUBLICATIONS --> 
      <div class="col">
        <div class="simple-box mt-0">
          <div class="publication-writing">
            <figure class="img-box">
              <a href="#" title="gabriel"><img src="/images/me.jpg" class="image" alt="user photo"></a>
            </figure>
            <div class="wrap-input">
              <textarea id="pub" class="form-control" placeholder="Tens algo de bom para postar?"></textarea>
              <div class="controls">
                <a class="btn-default">Enviar</a>
              </div>
            </div>
          </div>
        </div>

        <div class="publications-wrapper">
            <h4 class="wtitle">Todas as publicações</h4>
            <!-- publication start here --> 
            <post-list @openPost="publicationHasOpened"/>
        </div>
      </div>
      <!-- ! PUBLICATIONS ! --> 

      <div class="col-lg-3 col-md-4 reset-pdl">
        
        <div class="today-box">
          <ul class="topic-list">
            <li class="info">
              <figure class="wrap">
                <a href=""><img src="/images/liturgia.jpg" alt="liturgia"></a>
              </figure>
              <div class="content">
                <a href=""><h6 class="title">Liturgia Diária</h6></a>
              </div>
            </li>
            <li class="info">              
              <figure class="wrap">
                  <a href=""><img src="/images/padre-pio.jpg" alt="Santo do dia"></a>
              </figure>
              <div class="content">
                <a href=""><h6 class="title">Santo do dia</h6></a>
                <p class="desc">Santo Padre Pio</p>
              </div>
            </li>
            <li class="info">
              <figure class="wrap">
                <a href=""><img src="/images/liturgia.jpg" alt="Devoção Mensal"></a>
              </figure>
              <div class="content">
                <a href=""><h6 class="title">Devoção Mensal</h6></a>
                <p class="desc">Santo Padre Pio</p>
              </div>
            </li>
            <li class="info">
              <figure class="wrap">
                <a href=""><img src="/images/musica-liturgica.jpg" alt="Música do dia"></a>
              </figure>
              <div class="content">
                <a href=""><h6 class="title">Música do dia</h6></a>
                <p class="desc">Ave Maria, Op. 145 <br> 
                  <span class="author">Camille Saint-Saens</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- ! today news ! -->

        <!-- close events news -->
        <div class="close-events-box">
            <h3 class="headline">Missas e Confissões próximas</h3>
            <ul class="event-list">
              <li><a href="">
                <p>
                  <strong class="type">Confissão</strong>
                  Hoje 14:30 às 17h
                  <span class="place">Paróquia Cristo Rei</span>
                </p></a>
              </li>
              <li><a href="">
                <p>
                  <strong class="type">Missa</strong>
                  Hoje às 17h30
                  <span class="place">Capela Nossa Senhora das Dores</span>
                </p></a>
              </li>
              <li><a href="">
                <p>
                  <strong class="type">Missa Rito Extraordinário</strong>
                  Hoje às 19h
                  <span class="place">Capela Nossa Senhora de Fátima</span>
                </p></a>
              </li>
              <li><a href="">
                <p>
                  <strong class="type">Celebração Eucarística</strong>
                  Amanhã às 08h
                  <span class="place">Capela Dom Bosco</span>
                </p></a>
              </li>
              <li><a href="">
                <p>
                  <strong class="type">Missa Rito Extraordinário</strong>
                  Hoje às 19h
                  <span class="place">Capela Nossa Senhora de Fátima</span>
                </p></a>
              </li>
              <li><a href="">
                <p>
                  <strong class="type">Celebração Eucarística</strong>
                  Amanhã às 08h
                  <span class="place">Capela Dom Bosco</span>
                </p></a>
              </li>
            </ul>
        </div>
         <!-- ! close events news ! -->

         <!-- simple box -->
         <div class="simple-box centered">
           <a href=""><h3 class="title">Coloque a sua intenção</h3></a>
         </div>
         <!-- simple box -->
         <div class="simple-box centered">
            <a href=""><h3 class="title">Contribua com a plataforma</h3></a>
         </div>
         
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PostList from '@/components/publication/PostList'

export default {
    middleware: 'auth',
    head() {
      return {
        title: `Feed | ${ this.$store.getters['auth/getUser'].name }`
      }
    },
    methods: {
      publicationHasOpened(id){        
        let postId = this.$store.getters.getAllPosts.findIndex((item) => item.id == id)
        let post = this.$store.getters.getAllPosts[postId]
        
      }
    },
    components: {
        'post-list': PostList
    }
}
</script>
