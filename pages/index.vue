<template>
    <div id="home-slider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="img" src="/images/home/virgem-maria-1.jpg" alt="Virgem Maria 1">
            </div>
            <div class="carousel-item">
                <img class="img" src="/images/home/virgem-maria-2.jpg" alt="Virgem Maria 2">
            </div>
            <div class="carousel-item">
                <img class="img" src="/images/home/virgem-maria-3.jpg" alt="Virgem Maria 3">
            </div>
            <div class="carousel-item">
                <img class="img" src="/images/home/virgem-maria-4.jpg" alt="Virgem Maria 4">
            </div>
            <div class="carousel-item">
                <img class="img" src="/images/home/virgem-maria-5.jpg" alt="Virgem Maria 5">
            </div>
        </div>
         <nuxt-child/>
    </div>

</template>

<script>
export default {
    layout: 'index',
    head(){
        return{
            title: 'Icclesia - Veritas Perpetua'
        }
    }
}
</script>
