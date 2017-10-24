<template> 
    <div class="pl-container">
        <div class="pl-header">
            <button type="button" class="btn btn-primary">Login</button>
        </div>
        <div class="pl-home">
            <div class="pl-home__title">
                <span>ankker </span> - your personal log {{msg}}
            </div>

            <div class="pl-home__feed">
                Hook what matters to you

                <div class="pl-home__feed--tag">
                    <span>masterthechaos</span>
                </div>

                <div class="pl-home__feed--time">
                    05:03AM - 01 Mar 2017
                </div>
            </div>

            <div class="pl-home__feed">
                Hook what matters to you

                <div class="pl-home__feed--tag">
                    <span>masterthechaos</span>
                </div>

                <div class="pl-home__feed--time">
                    05:03AM - 01 Mar 2017
                </div>
            </div>

            <div class="pl-home__buttons">
                <button type="button" class="btn btn-default">Learn More</button>

                <button type="button" class="btn btn-primary">Sign Up</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss"> 
    @import "./home.scss";
</style>
