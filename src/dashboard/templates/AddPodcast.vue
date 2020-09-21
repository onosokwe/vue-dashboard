<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/add-podcast">Add Podcast</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <router-link 
                                    to="/podcasts" 
                                    class="btn pull-right btn-primary">LIST PODCASTS
                                </router-link>
                                <h1>Add Podcasts</h1>
                                <AddPodcastForm />
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
import AddPodcastForm from '../forms/AddPodcastForm'

export default {
	components: {
        DashNav,
        DashSide,
        AddPodcastForm
	}
}
</script>
