<template>
  <main class="site-wrapper">
       <div class="pt-table desktop-768">
            <div class="pt-tablecell page-home relative n-background">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-offset-2 col-lg-8">
                             <div class="page-title text-center">
                                 <span class="heading-page"> Welcome to My Page
                                  </span>
                                  <p class="mt20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                             </div>
                             <div class="hexagon-menu clear">
                               <template v-for="(item,key) in Configs">
                                 <hexagon-item :record="item" :key="key"></hexagon-item>
                               </template>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
   </main>
</template>

<script>
// @ is an alias to /src
import HexagonItem from './components/hexagon-item'
import Configs from './constant/configs'
export default {
    name: 'home',
    components: {
        HexagonItem
    },
    data() {
        return {
            Configs
        }
    },
}
</script>

<style lang="scss">
@import '@/style/grid.scss';
</style>
