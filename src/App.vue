<template>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
/*Global CSS*/
body {
  line-height: 1.6;
}

.section,
section {
  padding: 30px 0;
}

header .navbar-brand img {
  height: 50px;
}

.img-responsive {
  max-width: 100%;
}

table {
  margin-top: 50px;
}

table thead th {
  padding: 10px;
}

.nav-pills a {
  background: 0 0;
  border: 0;
  border-radius: 0.25rem;
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;  
}

a.router-link-active {
  background-color:#0d6efd;
  color: #fff;
  border-radius: 0;
}

.alert,
input,
form input,
form textarea.form-control,
input.form-control {
  border-radius: 0;
}

button.btn {
  border-radius: 0;
}

button.btn-long {
  margin-top: 15px;
  width: 100%;
}

.modal-header {
  border-bottom: 0;
}

.modal-footer {
  border-top: 0;
}

form.search-bar button,
form.search-bar input {
  margin-bottom: 15px;
  width: 100%;
}

table.table-posts thead {
  display: none;
}

table.table-posts tr td {
  display: block;
  border-bottom-width: 0;
}

table.table-posts tr td:last-child {
  text-align: center;  
}

@media (max-width: 767px) {
  .visible-xs {
    display: block;
  }
}

@media (min-width: 768px) {
  .visible-xs {    
    display: none;
  }
  
  header .navbar-brand img {
    height: 80px;
  }
  
  form.search-bar button {
    margin-bottom: 15px;
    width: auto;
  }
  
  table.table-posts thead {
    display: table-row;
  }
  
  table.table-posts tr td {
    display: table-cell ;
    border-bottom-width: 1;
  }

  table.table-posts tr td:last-child {
    text-align: center;  
  }

}
</style>
