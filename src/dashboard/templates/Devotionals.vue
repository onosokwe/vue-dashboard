<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/devotionals">Devotionals</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <router-link 
                                    to="/add-devotional" 
                                    class="btn pull-right btn-primary">ADD DEVOTIONAL
                                </router-link>
                                
                                <h1>Daily Devotionals</h1>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="search" onkeyup="Searcher()" placeholder="Search by Title">
                                </div>
                                <DailyDevotionalList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>

<script>
import DashNav from '../inc/DashNav'
import DashSide from '../inc/DashSide'
import DailyDevotionalList from '../lists/DailyDevList'

export default {
	components: {
        DashNav,
        DashSide,
        DailyDevotionalList
	}
}
</script>
