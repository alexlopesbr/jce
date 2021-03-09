<template>
  <section class="feature">
    <div class="feature__head">
      <h2>Features</h2>

      <p>
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
    </div>

    <div class="feature__container">
      <div class="feature__content">
        <img src="../assets/image3.svg" alt="" />
        <div class="feature__specs">
          <h3>Search Data</h3>
          <p>
            Don’t worry if your data is very large, the Data Warehoue provides a
            search engine, which is useful for making it easier to find data
            effectively saving time.
          </p>
          <router-link class="link" to="/about">Learn more →</router-link>
        </div>
      </div>

      <div class="feature__content">
        <img src="../assets/image3.svg" alt="" />
        <div class="feature__specs">
          <h3>Search Data</h3>
          <p>
            Don’t worry if your data is very large, the Data Warehoue provides a
            search engine, which is useful for making it
          </p>
          <router-link class="link" to="/about">Learn more →</router-link>
        </div>
      </div>

      <div class="feature__content">
        <img src="../assets/image3.svg" alt="" />
        <div class="feature__specs">
          <h3>Search Data</h3>
          <p>
            Don’t worry if your data is very large, the Data Warehoue provides a
            search engine, which is useful for making it easier to find data
            effectively
          </p>
          <router-link class="link" to="/about">Learn more →</router-link>
        </div>
      </div>

      <div class="feature__content">
        <img src="../assets/image3.svg" alt="" />
        <div class="feature__specs">
          <h3>Search Data</h3>
          <p>
            Don’t worry if your data is very large, the Data Warehoue provides a
            search engine, which is useful for making it easier
          </p>
          <router-link class="link" to="/about">Learn more →</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature {
  max-width: 1024px;
}
.feature__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
}
h2 {
  text-align: center;
}
.feature__head p {
  margin: 0 auto;
  width: 584px;
  text-align: center;
}

.feature__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: top;

  margin: 10px;
  padding: 20px;

  max-width: 500px;

  background-image: url('../assets/feature-background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}

.feature img {
  margin-top: 20px;
}

.feature__specs {
  display: grid;
  grid-gap: 20px;
}

.link {
  align-self: flex-end;
}
</style>
