<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/podcasts">Podcasts</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <router-link 
                                    to="/add-podcast" 
                                    class="btn pull-right btn-primary">ADD PODCAST
                                </router-link>
                                <h1>Podcasts</h1>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="search" onkeyup="Searcher()" placeholder="Search by Title">
                                </div>
                                <PodcastsList />
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
import PodcastsList from '../lists/PodcastsList'

export default {
	components: {
        DashNav,
        DashSide,
        PodcastsList
	}
}
</script>
