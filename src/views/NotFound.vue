<template>
  <div class="wrapper">
    <header class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="navbar navbar-expand-lg">            
                <a class="navbar-brand" href="#">
                  <img src="imgs/logo.png" class="img-responsive" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
    <section>
      <h2 class="d-none">Not found</h2>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">
            404 - Nothing found here!
            </h1>
            <p class="text-center">
            This page no longer exists or was moved to another location.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'NotFound'
}
</script>

<style>
#app {
 
}
</style>
