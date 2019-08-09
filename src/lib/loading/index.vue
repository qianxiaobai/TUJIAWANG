<template>
 <div class="loader" v-if="flag">
	<div class="loader-inner">
		<img src="https://pwastatic.tujia.com/static/fevueui/images/loading/full-screen-loading.gif" alt="">
	</div>
</div>
</template>

<script>
export default {};
</script>

<style>
.loader { 
   background:rgba(0,0,0,.3);
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 99999;
}

.loader-inner {
    bottom: 0;
    height: 60px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
}
.loader-inner img{
    width:100px;
    height: 100px
}
</style>