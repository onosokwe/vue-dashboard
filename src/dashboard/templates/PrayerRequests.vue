<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/prayer-requests">Prayer Requests</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <h1>Prayer Requests</h1>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="search" onkeyup="Searcher()" placeholder="Search by Date">
                                </div>
                                <PrayerRequestsList />
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
import PrayerRequestsList from '../lists/PrayerRequestsList'

export default {
	components: {
        DashNav,
        DashSide,
        PrayerRequestsList
	}
}
</script>
