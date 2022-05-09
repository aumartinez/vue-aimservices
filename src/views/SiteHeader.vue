<template>
  <header class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg">            
            <a class="navbar-brand" href="/">
              <img src="/img/logo.png" alt="logo" class="img-responsive" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mobile-nav">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: 'SiteHeader'
}
</script>
