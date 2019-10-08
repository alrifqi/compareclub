<template>
  <div>
    <b-navbar toggleable="lg" class="navbar--green">
      <b-navbar-brand href="#">
        <img src="~/assets/images/CC-logo-fix-2.svg" />
      </b-navbar-brand>

      <div>
        <img src="~/assets/images/profile.svg" />
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </div>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Groceries</b-nav-item>
          <b-nav-item href="#">Fuel</b-nav-item>
          <b-nav-item href="#">Insurances</b-nav-item>
          <b-nav-item href="#">Credit</b-nav-item>
          <b-nav-item href="#">Bills</b-nav-item>
          <b-nav-item href="#">About Us</b-nav-item>
          <b-nav-item href="#">Blog</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Hi, Jennifer" right>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
